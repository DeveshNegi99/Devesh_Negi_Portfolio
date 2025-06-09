
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Globe, Code } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "International Tech Solutions",
      period: "2021 - Present",
      description: "Leading full-stack development projects for global clients, managing end-to-end project lifecycle from requirements gathering to deployment and maintenance.",
      highlights: [
        "Delivered 8+ enterprise-level applications",
        "Reduced deployment time by 70% through DevOps automation",
        "Led a team of 5 developers across multiple time zones",
        "Implemented microservices architecture for scalability"
      ]
    },
    {
      title: "DevOps Engineer & Full-Stack Developer",
      company: "Cloud Native Solutions",
      period: "2019 - 2021",
      description: "Specialized in cloud infrastructure and full-stack development, working with international clients to build scalable and reliable systems.",
      highlights: [
        "Migrated legacy systems to cloud-native architecture",
        "Implemented CI/CD pipelines reducing bug reports by 60%",
        "Managed AWS infrastructure serving 100k+ users",
        "Collaborated with teams across 6 different countries"
      ]
    },
    {
      title: "Software Developer",
      company: "Tech Innovations Ltd.",
      period: "2018 - 2019",
      description: "Focused on frontend and backend development using modern frameworks and technologies for diverse client projects.",
      highlights: [
        "Built responsive web applications using Angular",
        "Developed RESTful APIs with Node.js and MongoDB",
        "Improved application performance by 40%",
        "Worked directly with international stakeholders"
      ]
    }
  ];

  const stats = [
    {
      icon: <Code className="h-6 w-6" />,
      label: "Projects Completed",
      value: "15+",
      description: "Enterprise & startup projects"
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: "Team Leadership",
      value: "5+",
      description: "Developers managed"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      label: "Global Clients",
      value: "10+",
      description: "Across 6 countries"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      label: "Years Experience",
      value: "5+",
      description: "In software development"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and leading development teams across global markets
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                    <CardDescription className="text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="self-start">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Key Achievements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
