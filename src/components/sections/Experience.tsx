import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "PCD Consultancy Services",
    period: "Present",
    description: "Developed and maintained web applications for clients, including e-commerce platforms and learning management systems.",
    responsibilities: [
      "Creating interactive web applications and learning management systems using React.js and Next.js",
      "Designing curriculum-aligned programming modules and coding exercises",
      "Building RESTful APIs and database architectures for educational platforms",
      "Deploying full-stack applications to production environments and managing CI/CD pipelines",
      "Configuring and maintaining AWS S3 buckets for storage and asset delivery",
    ],
  },

  {
    title: "Web Developer Intern",
    company: "Sublime Technocorp, Navi Mumbai",
    period: "Jun 2024 – May 2025",
    description: "Developed interactive and responsive web interfaces for multiple client projects",
    responsibilities: [
      "Developed web interfaces using React.js and Next.js for client projects",
      "Integrated and validated APIs ensuring seamless functionality",
      "Worked on backend development using Node.js with MySQL, PostgreSQL, and MongoDB",
      "Applied server-side and client-side rendering techniques for optimal performance",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border animate-fade-in hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                  <div className="text-lg text-muted-foreground">{exp.company}</div>
                  <Badge variant="secondary" className="mt-2">
                    {exp.period}
                  </Badge>
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground">
                    <span className="text-accent mt-1.5">▹</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
