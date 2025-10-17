import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "JewelOps E-commerce Platform",
    description: "A comprehensive e-commerce solution for jewelry retail, offering a seamless shopping experience with secure payment integration, real-time inventory management, and an admin panel that maintains and manages all website data efficiently.",
    technologies: ["React.js", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://jewelops.sublimetechnocorp.com/",
    github: "#",
  },
  {
    title: "Lead Management System Admin Panel",
    description: "An admin dashboard for managing and tracking sales leads, featuring role-based access, lead assignment and routing, customizable pipelines, bulk actions, analytics dashboards, and integrations with CRM and email automation.",
    technologies: ["React.js", "Next.js", "Express.js", "Prisma ORM", "Tailwind CSS"],
    link: "#",
    github: "#",
  },
  {
    title: "Kidzbook Unified Admin System",
    description: "Developed a comprehensive backend and admin panel for the Kidzbook Unified Admin System, an advanced educational and management platform that integrates multiple modules such as Education, E-Commerce, Events, Competitions, Social Media, and LowCostTrip under a single admin interface. ",
    technologies: ["React.js", "Node.js", "Prisma ORM", "Tailwind CSS"],
    link: "",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-border animate-fade-in hover:border-primary/50 transition-all duration-300 flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View
                  </a>
                </Button>
                {project.github !== "#" && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
