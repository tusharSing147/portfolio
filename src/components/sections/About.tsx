import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in">
            <div className="flex items-center gap-2 mb-6 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>New Delhi, India</span>
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Enthusiastic and detail-oriented Full Stack Developer with 1.5 years of hands-on experience in designing and
              building scalable web applications. Skilled in React.js, Next.js, and Node.js, with a strong focus on creating
              high-performance, user-friendly solutions that align with modern web standards and best practices.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced in end-to-end development, including API integration, database design, and deployment workflows
              using CI/CD and AWS services. Passionate about continuous learning, problem-solving, and contributing to
              impactful projects that enhance user experiences and business growth.
            </p>


            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Education
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="font-medium text-foreground">Bachelor of Science in Computer Science</div>
                  <div className="text-muted-foreground">University of Mumbai (SIES College)</div>
                  <div className="text-sm text-muted-foreground">2022 – 2025</div>
                </div>

                <div>
                  <div className="font-medium text-foreground">Intermediate</div>
                  <div className="text-muted-foreground">Gandhi Nagar Public School</div>
                  <div className="text-sm text-muted-foreground">2021 – 2022</div>
                  <div className="text-sm text-muted-foreground">Physics, Chemistry, Math, Computer Application</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
