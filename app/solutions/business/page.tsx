import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowRight, Users, Rocket, Target, CheckCircle2, ArrowLeft, Zap, Shield } from 'lucide-react'

export default function BusinessPage() {
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
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-green-500/10 border border-green-500/20 mb-4">
            <Users className="h-8 w-8 text-green-500" />
          </div>

          <Badge variant="outline" className="border-green-500/20 bg-green-500/5 text-green-500 px-4 py-1.5">
            For Businesses & Startups
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Transform Your Business Idea
            <span className="block mt-2 bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 bg-clip-text text-transparent">
              Into Reality
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete end-to-end development for your startup or business. From concept to deployment, we build scalable solutions that grow with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/submit-requirements">
              <Button className="gap-2 h-12 px-8">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Build</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive solutions for modern businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SaaS Platforms",
                description: "Multi-tenant applications with subscriptions, billing, and analytics",
                icon: "☁️"
              },
              {
                title: "E-commerce Solutions",
                description: "Online stores with inventory, payments, and order management",
                icon: "🛒"
              },
              {
                title: "Mobile Apps",
                description: "iOS and Android apps for your business or customers",
                icon: "📱"
              },
              {
                title: "Admin Dashboards",
                description: "Data visualization, reporting, and management interfaces",
                icon: "📊"
              },
              {
                title: "APIs & Integrations",
                description: "Connect your systems, third-party APIs, and automation",
                icon: "🔌"
              },
              {
                title: "AI-Powered Features",
                description: "ChatGPT integration, recommendations, and smart automation",
                icon: "🤖"
              }
            ].map((service) => (
              <Card key={service.title} className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Businesses Choose Us</h2>
            <p className="text-muted-foreground text-lg">
              Built for scale, reliability, and growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "Fast Time to Market",
                description: "Launch your MVP quickly and iterate based on real user feedback."
              },
              {
                icon: Zap,
                title: "Scalable Architecture",
                description: "Built to handle growth from day one with modern cloud infrastructure."
              },
              {
                icon: Shield,
                title: "Production-Ready",
                description: "Security best practices, monitoring, and deployment automation included."
              }
            ].map((benefit) => {
              const Icon = benefit.icon
              return (
                <Card key={benefit.title} className="border-border/40 bg-card/50 backdrop-blur text-center">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-green-500" />
                    </div>
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground text-lg">
              From idea to launch in weeks, not months
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We understand your vision, users, and business goals"
              },
              {
                step: "02",
                title: "POC Development",
                description: "Build a proof of concept to validate the approach"
              },
              {
                step: "03",
                title: "Full Development",
                description: "Once approved, we build the complete solution"
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploy to production and provide ongoing support"
              }
            ].map((phase) => (
              <Card key={phase.step} className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-primary/20 mb-2">{phase.step}</div>
                  <CardTitle className="text-lg mb-2">{phase.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {phase.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <Card className="border-green-500/20 bg-gradient-to-br from-green-500/5 via-background to-background overflow-hidden relative">
            <CardHeader className="space-y-4 pb-8 text-center relative">
              <CardTitle className="text-3xl md:text-5xl leading-tight">
                Ready to Build Your Business?
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed max-w-2xl mx-auto">
                Share your business idea. We'll create a proof of concept to bring your vision to life.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative">
              <Link href="/submit-requirements">
                <Button className="gap-2 h-12 px-8">
                  Start Your Business Project <ArrowRight className="h-4 w-4" />
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
