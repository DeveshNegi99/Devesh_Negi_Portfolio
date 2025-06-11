
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Container,
  Github,
  Cloud,
  Terminal,
  Settings,
  Wrench,
  Layers,
  Code,
  Braces,
  FileCode,
  Palette,
  Globe,
  Server,
  Database,
  Code2,
  FileText,
  GitBranch,
  GitMerge,
  Shield,
  Key
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: <Container className="h-6 w-6" />,
      skills: [
        { name: "Docker", icon: <Container className="h-4 w-4" /> },
        { name: "GitHub Actions", icon: <Github className="h-4 w-4" /> },
        { name: "AWS", icon: <Cloud className="h-4 w-4" /> },
        { name: "Linux", icon: <Terminal className="h-4 w-4" /> },
        { name: "Terraform", icon: <Settings className="h-4 w-4" /> },
        { name: "Ansible", icon: <Wrench className="h-4 w-4" /> },
        { name: "Kubernetes", icon: <Layers className="h-4 w-4" /> },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Angular", icon: <Code className="h-4 w-4" /> },
        { name: "JavaScript", icon: <Braces className="h-4 w-4" /> },
        { name: "TypeScript", icon: <FileCode className="h-4 w-4" /> },
        { name: "HTML5", icon: <Globe className="h-4 w-4" /> },
        { name: "CSS3", icon: <Palette className="h-4 w-4" /> },
        { name: "Bootstrap" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", icon: <Server className="h-4 w-4" /> },
        { name: "REST APIs", icon: <Globe className="h-4 w-4" /> },
        { name: "MongoDB", icon: <Database className="h-4 w-4" /> },
        { name: "Python", icon: <Code2 className="h-4 w-4" /> },
        { name: "Django", icon: <FileText className="h-4 w-4" /> },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Github className="h-6 w-6" />,
      skills: [
        { name: "GitHub", icon: <Github className="h-4 w-4" /> },
        { name: "GitLab", icon: <GitBranch className="h-4 w-4" /> },
        { name: "Bitbucket", icon: <GitMerge className="h-4 w-4" /> },
        { name: "OAuth", icon: <Shield className="h-4 w-4" /> },
        { name: "SSO", icon: <Key className="h-4 w-4" /> },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full development stack and modern DevOps practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="flex items-center gap-2 py-2 px-3">
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
