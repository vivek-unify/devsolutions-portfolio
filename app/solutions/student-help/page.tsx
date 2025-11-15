import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, ArrowRight, GraduationCap, Book, Code, CheckCircle2, ArrowLeft, Users } from 'lucide-react'
import { Footer } from "@/components/footer"

export default function StudentHelpPage() {
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
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-4">
            <GraduationCap className="h-8 w-8 text-purple-500" />
          </div>

          <Badge variant="outline" className="border-purple-500/20 bg-purple-500/5 text-purple-500 px-4 py-1.5">
            For Students
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Student Projects & Assignments
            <span className="block mt-2 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Expert Guidance
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stuck on a programming assignment? Need help with your final year project? We provide expert guidance and solutions to help you learn and succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/submit-requirements">
              <Button className="gap-2 h-12 px-8">
                Get Assignment Help <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Help With */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">What We Help With</h2>
            <p className="text-muted-foreground text-lg">
              From basic programming to advanced projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Programming Assignments",
                items: ["Data structures & algorithms", "Object-oriented programming", "Web development", "Database design"],
                icon: "💻"
              },
              {
                title: "Final Year Projects",
                items: ["Full-stack applications", "Mobile apps", "Machine learning projects", "Research implementation"],
                icon: "🎓"
              },
              {
                title: "Coursework Help",
                items: ["Code debugging", "Concept explanations", "Best practices", "Documentation"],
                icon: "📚"
              },
              {
                title: "Exam Preparation",
                items: ["Practice problems", "Code review", "Concept clarification", "Study materials"],
                icon: "✍️"
              }
            ].map((category) => (
              <Card key={category.title} className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <CardTitle className="text-xl mb-3">{category.title}</CardTitle>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3 w-3 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Learn While We Help</h2>
            <p className="text-muted-foreground text-lg">
              We don't just solve - we explain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Book,
                title: "Detailed Explanations",
                description: "Every solution comes with comments and explanations so you understand the approach."
              },
              {
                icon: Code,
                title: "Clean, Readable Code",
                description: "Well-structured code following best practices that you can learn from and present confidently."
              },
              {
                icon: Users,
                title: "Iterative Support",
                description: "Questions after delivery? We're here to explain and help you truly understand the solution."
              }
            ].map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="border-border/40 bg-card/50 backdrop-blur text-center">
                  <CardHeader>
                    <div className="h-14 w-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-purple-500" />
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

      {/* Pricing */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold">Student-Friendly Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand student budgets. Our pricing is flexible and affordable, with options for simple assignments to complex projects.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                label: "Small Assignment",
                price: "From $50",
                description: "Basic programs, simple algorithms"
              },
              {
                label: "Medium Project",
                price: "From $200",
                description: "Web apps, databases, APIs"
              },
              {
                label: "Final Year Project",
                price: "Custom Quote",
                description: "Full applications, research work"
              }
            ].map((tier) => (
              <Card key={tier.label} className="border-border/40 bg-card/50 backdrop-blur">
                <CardHeader className="text-center">
                  <CardDescription className="text-sm mb-2">{tier.label}</CardDescription>
                  <CardTitle className="text-3xl text-primary">{tier.price}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <Card className="border-purple-500/20 bg-gradient-to-br from-purple-500/5 via-background to-background overflow-hidden relative">
            <CardHeader className="space-y-4 pb-8 text-center relative">
              <CardTitle className="text-3xl md:text-5xl leading-tight">
                Ready to Ace Your Assignment?
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed max-w-2xl mx-auto">
                Submit your assignment details. We'll provide a solution with detailed explanations to help you learn.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative">
              <Link href="/submit-requirements">
                <Button className="gap-2 h-12 px-8">
                  Submit Assignment <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
