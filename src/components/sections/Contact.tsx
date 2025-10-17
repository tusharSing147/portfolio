import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
            <p className="text-center text-lg text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Email</div>
                  <a
                    href="mailto:tusharsingh6171@gmail.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    tusharsingh6171@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Phone</div>
                  <a
                    href="tel:+918218449621"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    (+91) 8218449621
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">Location</div>
                  <div className="text-muted-foreground">New Delhi, India</div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground mb-1">GitHub</div>
                  <a
                    href="https://www.linkedin.com/in/tushar-singh-746985335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    github.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="mailto:tusharsingh6171@gmail.com">Send Me an Email</a>
              </Button>
            </div>
          </Card>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-12 text-muted-foreground">
        <p>© 2025 Tushar Singh. Built with React & Tailwind CSS.</p>
      </div>
    </section>
  );
};
