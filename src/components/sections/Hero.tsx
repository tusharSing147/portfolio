import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-4 text-accent font-medium">Hello, I'm</div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Tushar Singh
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Passionate about building scalable, user-centric applications with React.js, Next.js, and Node.js.
            Currently crafting educational technology solutions that bridge theory and practice.
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:tusharsingh6171@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/tushar-singh-746985335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" aria-label="Scroll to about section">
              <ArrowDown className="h-6 w-6 mx-auto text-muted-foreground" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
