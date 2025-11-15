"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Code2, ArrowLeft, Loader2, Send } from 'lucide-react'
import { createClient } from "@/lib/supabase/client"

const domainOptions = [
  { id: "frontend", label: "Frontend Development" },
  { id: "backend", label: "Backend Development" },
  { id: "fullstack", label: "Full Stack Development" },
  { id: "ai", label: "AI Integration" },
  { id: "mobile", label: "Mobile Development" },
  { id: "devops", label: "DevOps & Cloud" },
  { id: "other", label: "Other" }
]

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet"
]

const timelineOptions = [
  "ASAP (1-2 weeks)",
  "1 Month",
  "2-3 Months",
  "3-6 Months",
  "6+ Months",
  "Flexible"
]

export default function SubmitRequirementsPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    projectTitle: "",
    projectDescription: "",
    domains: [] as string[],
    budgetRange: "",
    timeline: "",
    additionalRequirements: ""
  })

  const handleDomainToggle = (domainId: string) => {
    setFormData(prev => ({
      ...prev,
      domains: prev.domains.includes(domainId)
        ? prev.domains.filter(d => d !== domainId)
        : [...prev.domains, domainId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    if (formData.domains.length === 0) {
      setError("Please select at least one domain")
      setIsSubmitting(false)
      return
    }

    try {
      const supabase = createClient()
      
      const { error: insertError } = await supabase
        .from('clients')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone || null,
          company_name: formData.companyName || null,
          project_title: formData.projectTitle,
          project_description: formData.projectDescription,
          domain: formData.domains,
          budget_range: formData.budgetRange || null,
          timeline: formData.timeline || null,
          additional_requirements: formData.additionalRequirements || null,
          status: 'new'
        })

      if (insertError) throw insertError

      router.push('/submission-success')
    } catch (err) {
      console.error('Submission error:', err)
      setError(err instanceof Error ? err.message : 'Failed to submit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-lg">DevSolutions</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 pt-28 pb-12">
        <div className="max-w-3xl mx-auto mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Submit Your Requirements</h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your project and we'll get back to you with a custom proof of concept
            </p>
          </div>

          <Card className="border-border/40 bg-card/50 backdrop-blur">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 pb-2">
                    <div className="h-1 w-8 bg-primary rounded-full" />
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name</Label>
                      <Input
                        id="companyName"
                        placeholder="Acme Inc."
                        value={formData.companyName}
                        onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-5 pt-4">
                  <div className="flex items-center gap-2 pb-2">
                    <div className="h-1 w-8 bg-primary rounded-full" />
                    <h3 className="text-xl font-semibold">Project Details</h3>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="projectTitle">Project Title *</Label>
                    <Input
                      id="projectTitle"
                      placeholder="E-commerce Platform Redesign"
                      required
                      value={formData.projectTitle}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectTitle: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectDescription">Project Description *</Label>
                    <Textarea
                      id="projectDescription"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      rows={6}
                      required
                      value={formData.projectDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectDescription: e.target.value }))}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Domain Selection *</Label>
                    <p className="text-sm text-muted-foreground">Select all that apply</p>
                    <div className="grid md:grid-cols-2 gap-3">
                      {domainOptions.map((domain) => (
                        <div key={domain.id} className="flex items-center space-x-3 p-3 rounded-lg border border-border/40 hover:border-primary/30 transition-colors bg-background/50">
                          <Checkbox
                            id={domain.id}
                            checked={formData.domains.includes(domain.id)}
                            onCheckedChange={() => handleDomainToggle(domain.id)}
                          />
                          <Label
                            htmlFor={domain.id}
                            className="text-sm font-normal cursor-pointer flex-1"
                          >
                            {domain.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="budgetRange">Budget Range</Label>
                      <select
                        id="budgetRange"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={formData.budgetRange}
                        onChange={(e) => setFormData(prev => ({ ...prev, budgetRange: e.target.value }))}
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <select
                        id="timeline"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        value={formData.timeline}
                        onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                      >
                        <option value="">Select timeline</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                    <Textarea
                      id="additionalRequirements"
                      placeholder="Any other details, specific technologies, integrations, or concerns..."
                      rows={4}
                      value={formData.additionalRequirements}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalRequirements: e.target.value }))}
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <div className="pt-4">
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Requirements <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting, you agree to receive communication about your project
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
