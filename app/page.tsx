import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Database, Layers, Brain, Smartphone, Cloud, ArrowRight, Sparkles, Briefcase, Users, GraduationCap, Puzzle } from 'lucide-react'
import { AnimatedBackground } from "@/components/animated-background"

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Modern, responsive web interfaces using React, Next.js, Vue, and cutting-edge frameworks.",
    technologies: ["React", "Next.js", "Vue", "Tailwind CSS"],
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Scalable server-side solutions with Node.js, Python, and robust database architectures.",
    technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Layers,
    title: "Full Stack Solutions",
    description: "End-to-end application development from concept to deployment.",
    technologies: ["Next.js", "tRPC", "Prisma", "TypeScript"],
    gradient: "from-amber-500/10 to-orange-500/10"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Integrate GPT, custom ML models, and intelligent automation into your applications.",
    technologies: ["OpenAI", "TensorFlow", "LangChain", "Vector DBs"],
    gradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile apps for iOS and Android.",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"],
    gradient: "from-rose-500/10 to-red-500/10"
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    description: "CI/CD pipelines, cloud infrastructure, and deployment automation.",
    technologies: ["AWS", "Vercel", "Docker", "GitHub Actions"],
    gradient: "from-indigo-500/10 to-violet-500/10"
  }
]

const useCases = [
  {
    icon: Briefcase,
    title: "Overwhelmed at Work?",
    description: "Took a break or need help catching up? We'll handle your development tasks professionally and on time.",
    gradient: "from-orange-500/10 to-amber-500/10",
    link: "/solutions/work-help"
  },
  {
    icon: Puzzle,
    title: "Outsource Specific Features",
    description: "Need a particular component or feature built? We can integrate seamlessly with your existing codebase.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    link: "/solutions/feature-outsource"
  },
  {
    icon: GraduationCap,
    title: "Student Projects & Assignments",
    description: "Get expert guidance and solutions for your programming assignments and academic projects.",
    gradient: "from-purple-500/10 to-pink-500/10",
    link: "/solutions/student-help"
  },
  {
    icon: Users,
    title: "Business Solutions",
    description: "Complete end-to-end development for your startup or business idea, from concept to deployment.",
    gradient: "from-green-500/10 to-emerald-500/10",
    link: "/solutions/business"
  }
]

const howItWorks = [
  {
    step: "01",
    title: "Share Your Requirements",
    description: "Tell us about your project, timeline, and technical needs through our simple form.",
    icon: "📝"
  },
  {
    step: "02",
    title: "Receive First POC",
    description: "We deliver an initial proof of concept to validate our approach and quality.",
    icon: "🚀"
  },
  {
    step: "03",
    title: "Pay Only on Delivery",
    description: "If you're satisfied with the POC, we proceed. You only pay after successful delivery.",
    icon: "✅"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative">
      <AnimatedBackground />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold text-lg">DevSolutions</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#who-we-help" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Who We Help
            </Link>
            <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </Link>
          </nav>
          <Link href="/submit-requirements">
            <Button size="sm" className="gap-2">
              Get Started <ArrowRight className="h-3 w-3" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary px-4 py-1.5">
            <Sparkles className="h-3 w-3 mr-1.5 inline" />
            Risk-Free Development
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            Your Code, Done Right
            <span className="block mt-2 bg-gradient-to-r from-primary via-amber-400 to-primary bg-clip-text text-transparent animate-gradient">
              Zero Risk, Zero Hassle
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're overwhelmed with work, outsourcing a feature, need help with assignments, or building a business - we've got you covered.
            See the proof of concept first, pay only when satisfied.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link href="/submit-requirements">
              <Button className="gap-2">
                Start Your Project <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button className="bg-background/50 border-foreground/20 text-foreground hover:border-foreground/40" asChild>
              <Link href="#services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="container mx-auto px-4 py-20 md:py-32 bg-muted/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Who We Help</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From professionals to students, we support everyone with their development needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase) => {
            const Icon = useCase.icon
            return (
              <Link key={useCase.title} href={useCase.link}>
                <Card className="group hover:border-primary/30 transition-all border-border/40 bg-card/50 backdrop-blur overflow-hidden cursor-pointer h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <CardHeader className="relative text-center pb-4">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <CardTitle className="text-lg mb-3">{useCase.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-sm">
                      {useCase.description}
                    </CardDescription>
                    <div className="mt-4 text-xs text-primary group-hover:underline">
                      Learn more →
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            )
          })}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A transparent process designed to minimize your risk
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {howItWorks.map((item, index) => (
            <div key={item.step} className="relative">
              {index < howItWorks.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              <Card className="relative border-border/40 bg-card/50 backdrop-blur hover:border-primary/20 transition-all group">
                <CardHeader className="pb-4">
                  <div className="text-6xl mb-4">{item.icon}</div>
                  <div className="text-sm font-mono text-primary mb-2">Step {item.step}</div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20 md:py-32 bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="group hover:border-primary/30 transition-all border-border/40 bg-card/50 backdrop-blur overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                <CardHeader className="relative">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="leading-relaxed text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-background/60">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="benefits" className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground text-lg">
              Flexible, reliable, and tailored to your unique needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Zero Upfront Risk",
                description: "Review our proof of concept before making any commitment. Perfect for trying out our services."
              },
              {
                icon: "⚡",
                title: "Flexible Engagement",
                description: "One-time projects, ongoing support, single features, or complete solutions - we adapt to your needs."
              },
              {
                icon: "🚀",
                title: "Fast & Reliable",
                description: "Quick turnaround times with consistent communication. We understand deadlines matter."
              },
              {
                icon: "🎓",
                title: "All Skill Levels Welcome",
                description: "From students to professionals to businesses - we provide the right level of support for everyone."
              },
              {
                icon: "💼",
                title: "Professional & Discreet",
                description: "Your projects and information are handled with complete confidentiality and professionalism."
              },
              {
                icon: "🔧",
                title: "Expert Solutions",
                description: "Production-ready code following best practices across all modern tech stacks and frameworks."
              }
            ].map((item) => (
              <div key={item.title} className="flex gap-4 group">
                <div className="flex-shrink-0 text-4xl">{item.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2 text-xl group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
            <CardHeader className="space-y-4 pb-8 text-center relative">
              <CardTitle className="text-3xl md:text-5xl leading-tight">
                Ready to Start Your Project?
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed max-w-2xl mx-auto">
                Share your requirements and receive a custom proof of concept.
                No obligation, no upfront payment.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center relative">
              <Link href="/submit-requirements">
                <Button className="gap-2">
                  Get Started Now <ArrowRight className="h-4 w-4" />
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
