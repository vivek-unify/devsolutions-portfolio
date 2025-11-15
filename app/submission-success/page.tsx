import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Code2, ArrowLeft, Sparkles } from 'lucide-react'

export default function SubmissionSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-2xl relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 justify-center mb-12 group">
          <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-105">
            <Code2 className="h-5 w-5 text-primary" />
          </div>
          <span className="font-semibold text-xl">DevSolutions</span>
        </Link>

        <Card className="text-center border-border/40 bg-card/50 backdrop-blur-xl">
          <CardHeader className="space-y-6 pb-8">
            <div className="mx-auto">
              <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto animate-pulse">
                <CheckCircle2 className="h-10 w-10 text-green-500" />
              </div>
            </div>
            <div>
              <CardTitle className="text-3xl md:text-4xl mb-4">
                Submission Successful!
              </CardTitle>
              <CardDescription className="text-lg leading-relaxed">
                Thank you for sharing your project details. We've received your requirements and our team is reviewing them.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="bg-background/60 border border-border/40 p-6 rounded-xl text-left space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-lg">What happens next?</h3>
              </div>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-lg leading-none">1</span>
                  <span className="flex-1 pt-0.5">We'll review your requirements within 24 hours</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-lg leading-none">2</span>
                  <span className="flex-1 pt-0.5">Our team will reach out to discuss project details</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-lg leading-none">3</span>
                  <span className="flex-1 pt-0.5">We'll deliver an initial proof of concept for your review</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-lg leading-none">4</span>
                  <span className="flex-1 pt-0.5">You decide if you want to proceed - no obligation, no upfront payment</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button className="bg-background/50 border-foreground/20 text-foreground hover:border-foreground/40" asChild>
                <Link href="/submit-requirements">
                  Submit Another Project
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
