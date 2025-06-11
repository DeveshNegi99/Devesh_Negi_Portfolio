
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with microservices architecture, built for international scalability.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      tech: ["Angular", "Node.js", "MongoDB", "Docker", "AWS"],
      category: "fullstack",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "DevOps CI/CD Pipeline",
      description: "Automated deployment pipeline reducing deployment time by 80% using modern DevOps practices.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      tech: ["Docker", "Kubernetes", "GitHub Actions", "Terraform"],
      category: "devops",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Real-time Dashboard",
      description: "Interactive dashboard with real-time data visualization for business intelligence.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      tech: ["Angular", "TypeScript", "D3.js", "WebSocket"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Microservices API Gateway",
      description: "Scalable API gateway handling 10k+ requests/minute with authentication and rate limiting.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      tech: ["Node.js", "MongoDB", "Redis", "OAuth", "Docker"],
      category: "backend",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud Infrastructure",
      description: "Multi-region cloud infrastructure with auto-scaling and disaster recovery capabilities.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      tech: ["AWS", "Terraform", "Ansible", "Kubernetes"],
      category: "devops",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Mobile-First Web App",
      description: "Progressive web application with offline capabilities and native-like user experience.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      tech: ["Angular", "PWA", "Service Workers", "IndexedDB"],
      category: "frontend",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Full Stack" },
    { id: "devops", label: "DevOps" }
  ];

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing a selection of projects that demonstrate technical expertise and problem-solving capabilities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
