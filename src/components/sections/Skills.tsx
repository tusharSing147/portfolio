import { Card } from "@/components/ui/card";
import { Code2, Database, Layers, Lightbulb } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    icon: Layers,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Prisma ORM"],
  },
  {
    title: "Technical Skills",
    icon: Lightbulb,
    skills: [
      "API Integration",
      "Server-Side & Client-Side Rendering",
      "Performance Optimization",
      "Teaching & Mentoring",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border animate-fade-in hover:border-primary/50 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-secondary text-foreground rounded-full text-sm hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
