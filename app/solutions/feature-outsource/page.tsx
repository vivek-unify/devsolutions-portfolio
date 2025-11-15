import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowRight, Puzzle, Zap, GitBranch, CheckCircle2, ArrowLeft } from 'lucide-react'

export default function FeatureOutsourcePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-lg">DevSolutions</span>
          </Link>
          <Link href="/submit-requirements">
            <Button size="sm" className="gap-2">
              Get Started <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4">
            <Puzzle className="h-8 w-8 text-blue-500" />
          </div>

          <Badge variant="outline" className="border-blue-500/20 bg-blue-500/5 text-blue-500 px-4 py-1.5">
            For Development Teams
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Outsource Specific Features
            <span className="block mt-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Seamless Integration
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Need a particular component or feature built? We integrate seamlessly with your existing codebase, following your conventions and standards.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/submit-requirements">
              <Button className="gap-2 h-12 px-8">
                Outsource a Feature <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Can Build</h2>
            <p className="text-muted-foreground text-lg">
              From UI components to backend APIs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "UI Components",
                examples: ["Custom forms", "Data tables", "Dashboards", "Charts & graphs"],
                icon: "🎨"
              },
              {
                title: "API Development",
                examples: ["REST APIs", "GraphQL", "Webhooks", "Integrations"],
                icon: "🔌"
              },
              {
                title: "Authentication",
                examples: ["OAuth flows", "2FA", "SSO", "Permission systems"],
                icon: "🔐"
              },
              {
                title: "Payment Systems",
                examples: ["Stripe integration", "Subscriptions", "Invoicing", "Multi-currency"],
                icon: "💳"
              },
              {
                title: "Search Features",
                examples: ["Full-text search", "Filters", "Autocomplete", "Advanced queries"],
                icon: "🔍"
              },
              {
                title: "Real-time Features",
                examples: ["Chat systems", "Notifications", "Live updates", "Websockets"],
                icon: "⚡"
              }
            ].map((category) => (
              <Card key={category.title} className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <CardTitle className="text-xl mb-3">{category.title}</CardTitle>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.examples.map((example) => (
                      <li key={example} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How We Integrate</h2>
            <p className="text-muted-foreground text-lg">
              Smooth integration with your workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GitBranch,
                title: "Code Review Access",
                description: "We work in a separate branch, submit PRs, and incorporate your team's feedback."
              },
              {
                icon: Zap,
                title: "Match Your Style",
                description: "We follow your existing code conventions, architecture patterns, and best practices."
              },
              {
                icon: CheckCircle2,
                title: "Testing Included",
                description: "Unit tests, integration tests, and documentation for everything we build."
              }
            ].map((step) => {
              const Icon = step.icon
              return (
                <Card key={step.title} className="border-border/40 bg-card/50 backdrop-blur text-center">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <Card className="border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-background to-background overflow-hidden relative">
            <CardHeader className="space-y-4 pb-8 text-center relative">
              <CardTitle className="text-3xl md:text-5xl leading-tight">
                Ready to Outsource Your Feature?
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed max-w-2xl mx-auto">
                Tell us what you need built. We'll deliver a proof of concept that integrates with your codebase.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative">
              <Link href="/submit-requirements">
                <Button className="gap-2 h-12 px-8">
                  Submit Feature Request <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code2 className="h-3 w-3 text-primary" />
              </div>
              <span className="font-semibold">DevSolutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 DevSolutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
