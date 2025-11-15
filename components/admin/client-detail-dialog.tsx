"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X, Mail, Phone, Building2, Calendar, DollarSign, Clock, Loader2 } from 'lucide-react'
import { createClient } from "@/lib/supabase/client"

type Client = {
  id: string
  created_at: string
  full_name: string
  email: string
  phone: string | null
  company_name: string | null
  project_title: string
  project_description: string
  domain: string[]
  budget_range: string | null
  timeline: string | null
  additional_requirements: string | null
  status: string
  admin_notes: string | null
  updated_at: string
}

type Props = {
  client: Client
  onClose: () => void
  onUpdate: () => void
}

const statusOptions = [
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'poc-in-progress', label: 'POC In Progress' },
  { value: 'poc-delivered', label: 'POC Delivered' },
  { value: 'accepted', label: 'Accepted' },
  { value: 'completed', label: 'Completed' },
  { value: 'rejected', label: 'Rejected' }
]

export function ClientDetailDialog({ client, onClose, onUpdate }: Props) {
  const [status, setStatus] = useState(client.status)
  const [adminNotes, setAdminNotes] = useState(client.admin_notes || "")
  const [isSaving, setIsSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSave = async () => {
    setIsSaving(true)
    setError(null)

    try {
      const supabase = createClient()
      
      const { error: updateError } = await supabase
        .from('clients')
        .update({
          status,
          admin_notes: adminNotes || null
        })
        .eq('id', client.id)

      if (updateError) throw updateError

      onUpdate()
    } catch (err) {
      console.error('Update error:', err)
      setError(err instanceof Error ? err.message : 'Failed to update')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Client Details</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-medium">{client.full_name}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">{client.email}</p>
                </div>
              </div>
              {client.phone && (
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">{client.phone}</p>
                  </div>
                </div>
              )}
              {client.company_name && (
                <div className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Company</p>
                    <p className="font-medium">{client.company_name}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Project Details</h3>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Project Title</p>
              <p className="font-medium text-lg">{client.project_title}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-1">Description</p>
              <p className="leading-relaxed">{client.project_description}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Domains</p>
              <div className="flex flex-wrap gap-2">
                {client.domain.map((d) => (
                  <Badge key={d} variant="secondary">{d}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Additional Information</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {client.budget_range && (
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Budget</p>
                    <p className="font-medium text-sm">{client.budget_range}</p>
                  </div>
                </div>
              )}
              {client.timeline && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Timeline</p>
                    <p className="font-medium text-sm">{client.timeline}</p>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-xs text-muted-foreground">Submitted</p>
                  <p className="font-medium text-sm">
                    {new Date(client.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
            {client.additional_requirements && (
              <div>
                <p className="text-sm text-muted-foreground mb-1">Additional Requirements</p>
                <p className="leading-relaxed">{client.additional_requirements}</p>
              </div>
            )}
          </div>

          {/* Status Management */}
          <div className="space-y-3 pt-4 border-t">
            <h3 className="font-semibold text-lg">Status Management</h3>
            <div className="space-y-2">
              <Label htmlFor="status">Project Status</Label>
              <select
                id="status"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="adminNotes">Admin Notes</Label>
              <Textarea
                id="adminNotes"
                placeholder="Add internal notes about this client or project..."
                rows={4}
                value={adminNotes}
                onChange={(e) => setAdminNotes(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <div className="p-3 rounded-md bg-destructive/10 text-destructive text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button onClick={handleSave} disabled={isSaving} className="flex-1">
              {isSaving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
            <Button variant="outline" onClick={onClose} disabled={isSaving}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
