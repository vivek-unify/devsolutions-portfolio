import Link from "next/link"
import { Code2, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code2 className="h-3 w-3 text-primary" />
              </div>
              <span className="font-semibold">DevSolutions</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional IT solutions with zero upfront risk. From students to enterprises, we deliver quality code you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/solutions/work-help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Work Help
                </Link>
              </li>
              <li>
                <Link href="/solutions/feature-outsource" className="text-muted-foreground hover:text-foreground transition-colors">
                  Feature Outsource
                </Link>
              </li>
              <li>
                <Link href="/solutions/student-help" className="text-muted-foreground hover:text-foreground transition-colors">
                  Student Help
                </Link>
              </li>
              <li>
                <Link href="/solutions/business" className="text-muted-foreground hover:text-foreground transition-colors">
                  Business Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+917815948979" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                  <Phone className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  +91 78159 48979
                </a>
              </li>
              <li>
                <a href="mailto:contact@devsolutions-portfolio.vercel.app" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group">
                  <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                  contact@devsolutions-portfolio.vercel.app
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 DevSolutions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/submit-requirements" className="hover:text-foreground transition-colors">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
