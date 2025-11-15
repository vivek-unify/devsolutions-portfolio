"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, LogOut, Users, BarChart3, FileText, Mail, Phone, Building2, Calendar, DollarSign, Clock } from 'lucide-react'
import { createClient } from "@/lib/supabase/client"
import { ClientDetailDialog } from "./client-detail-dialog"

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

type AdminProfile = {
  id: string
  email: string
  full_name: string | null
  role: string
}

type Props = {
  initialClients: Client[]
  adminProfile: AdminProfile
}

const statusColors: Record<string, string> = {
  'new': 'bg-blue-500',
  'contacted': 'bg-yellow-500',
  'poc-in-progress': 'bg-purple-500',
  'poc-delivered': 'bg-indigo-500',
  'accepted': 'bg-green-500',
  'completed': 'bg-emerald-500',
  'rejected': 'bg-red-500'
}

const statusLabels: Record<string, string> = {
  'new': 'New',
  'contacted': 'Contacted',
  'poc-in-progress': 'POC In Progress',
  'poc-delivered': 'POC Delivered',
  'accepted': 'Accepted',
  'completed': 'Completed',
  'rejected': 'Rejected'
}

export function AdminDashboardClient({ initialClients, adminProfile }: Props) {
  const router = useRouter()
  const [clients] = useState<Client[]>(initialClients)
  const [selectedClient, setSelectedClient] = useState<Client | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/admin/login")
    router.refresh()
  }

  const filteredClients = filterStatus === "all" 
    ? clients 
    : clients.filter(c => c.status === filterStatus)

  const stats = {
    total: clients.length,
    new: clients.filter(c => c.status === 'new').length,
    inProgress: clients.filter(c => ['contacted', 'poc-in-progress', 'poc-delivered'].includes(c.status)).length,
    completed: clients.filter(c => c.status === 'completed').length
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <div>
                <span className="font-semibold text-lg block">DevSolutions</span>
                <span className="text-xs text-muted-foreground">Admin Dashboard</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{adminProfile.full_name || adminProfile.email}</p>
                <p className="text-xs text-muted-foreground capitalize">{adminProfile.role}</p>
              </div>
              <Button size="sm" className="bg-background/50 border-foreground/20 text-foreground hover:border-foreground/40" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Clients</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.total}</div>
              <p className="text-xs text-muted-foreground mt-1">All time submissions</p>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">New Submissions</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                <FileText className="h-5 w-5 text-amber-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.new}</div>
              <p className="text-xs text-muted-foreground mt-1">Awaiting review</p>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Progress</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-purple-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.inProgress}</div>
              <p className="text-xs text-muted-foreground mt-1">Active projects</p>
            </CardContent>
          </Card>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
              <div className="h-10 w-10 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-green-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{stats.completed}</div>
              <p className="text-xs text-muted-foreground mt-1">Successfully delivered</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6 border-border/40 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-lg">Filter by Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filterStatus === "all" ? "default" : undefined}
                className={filterStatus !== "all" ? "bg-background/50 border-foreground/20 text-foreground hover:border-foreground/40" : ""}
                size="sm"
                onClick={() => setFilterStatus("all")}
              >
                All ({clients.length})
              </Button>
              {Object.keys(statusLabels).map((status) => (
                <Button
                  key={status}
                  variant={filterStatus === status ? "default" : undefined}
                  className={filterStatus !== status ? "bg-background/50 border-foreground/20 text-foreground hover:border-foreground/40" : ""}
                  size="sm"
                  onClick={() => setFilterStatus(status)}
                >
                  {statusLabels[status]} ({clients.filter(c => c.status === status).length})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Client List */}
        <Card className="border-border/40 bg-card/50 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl">Client Submissions</CardTitle>
            <CardDescription className="text-base">
              Showing {filteredClients.length} of {clients.length} submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredClients.length === 0 ? (
              <div className="text-center py-16 text-muted-foreground">
                <div className="h-16 w-16 rounded-xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 opacity-50" />
                </div>
                <p className="text-lg">No submissions found</p>
                <p className="text-sm mt-2">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <Card key={client.id} className="cursor-pointer hover:border-primary/30 transition-all border-border/40 bg-background/50" onClick={() => setSelectedClient(client)}>
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center flex-wrap gap-2 mb-3">
                              <h3 className="font-semibold text-xl">{client.project_title}</h3>
                              <Badge variant="secondary" className={`${statusColors[client.status]} text-white border-0`}>
                                {statusLabels[client.status]}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
                              {client.project_description}
                            </p>
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">{client.full_name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">{client.email}</span>
                          </div>
                          {client.phone && (
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="truncate">{client.phone}</span>
                            </div>
                          )}
                          {client.company_name && (
                            <div className="flex items-center gap-2">
                              <Building2 className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                              <span className="truncate">{client.company_name}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {client.domain.map((d) => (
                            <Badge key={d} variant="secondary">{d}</Badge>
                          ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(client.created_at).toLocaleDateString()}
                          </div>
                          {client.budget_range && (
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-3 w-3" />
                              {client.budget_range}
                            </div>
                          )}
                          {client.timeline && (
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {client.timeline}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Client Detail Dialog */}
      {selectedClient && (
        <ClientDetailDialog
          client={selectedClient}
          onClose={() => setSelectedClient(null)}
          onUpdate={() => {
            router.refresh()
            setSelectedClient(null)
          }}
        />
      )}
    </div>
  )
}
