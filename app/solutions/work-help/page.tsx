import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowRight, Briefcase, Clock, Shield, CheckCircle2, ArrowLeft } from 'lucide-react'

export default function WorkHelpPage() {
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
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 mb-4">
            <Briefcase className="h-8 w-8 text-orange-500" />
          </div>

          <Badge variant="outline" className="border-orange-500/20 bg-orange-500/5 text-orange-500 px-4 py-1.5">
            For Professionals
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Overwhelmed at Work?
            <span className="block mt-2 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              We've Got Your Back
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Took a career break? Fell behind on a project? Need to catch up quickly? We handle your development tasks professionally while you maintain your reputation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/submit-requirements">
              <Button className="gap-2 h-12 px-8">
                Get Help Now <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Scenarios */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">We Understand Your Situation</h2>
            <p className="text-muted-foreground text-lg">
              Life happens. Here's how we can help
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Returned from a Break",
                description: "Took time off for family, health, or travel? We'll help you catch up on missed work and get back on track without stress.",
                icon: "🏖️"
              },
              {
                title: "Tight Deadlines",
                description: "Project deadline approaching and you're behind? We'll work efficiently to deliver quality code on time.",
                icon: "⏰"
              },
              {
                title: "Skill Gap",
                description: "Assigned a project using unfamiliar technologies? Let us handle it while you focus on what you do best.",
                icon: "🎯"
              },
              {
                title: "Workload Overflow",
                description: "Too many projects at once? We'll take on specific tasks so you can focus on priorities.",
                icon: "📚"
              }
            ].map((scenario) => (
              <Card key={scenario.title} className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="text-4xl mb-3">{scenario.icon}</div>
                  <CardTitle className="text-xl">{scenario.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {scenario.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Complete Confidentiality</h2>
            <p className="text-muted-foreground text-lg">
              Your secret is safe with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "100% Confidential",
                description: "We never disclose our involvement. Your colleagues will only see your name on the commits."
              },
              {
                icon: Clock,
                title: "Quick Turnaround",
                description: "We work efficiently to meet your deadlines. Emergency rush jobs? We can handle those too."
              },
              {
                icon: CheckCircle2,
                title: "Professional Quality",
                description: "Production-ready code that matches your company's standards and coding conventions."
              }
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border/40 bg-card/50 backdrop-blur text-center">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-orange-500" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
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
          <Card className="border-orange-500/20 bg-gradient-to-br from-orange-500/5 via-background to-background overflow-hidden relative">
            <CardHeader className="space-y-4 pb-8 text-center relative">
              <CardTitle className="text-3xl md:text-5xl leading-tight">
                Ready to Get Back on Track?
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed max-w-2xl mx-auto">
                Share your requirements confidentially. We'll deliver a proof of concept before you commit.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative">
              <Link href="/submit-requirements">
                <Button className="gap-2 h-12 px-8">
                  Start Confidential Request <ArrowRight className="h-4 w-4" />
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
