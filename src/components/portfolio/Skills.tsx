
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Docker, 
  Github, 
  Aws, 
  Linux, 
  Terraform, 
  Ansible, 
  Kubernetes,
  Angular,
  Javascript,
  Typescript,
  Html5,
  Css3,
  Nodejs,
  Rest,
  Mongodb,
  Python,
  Django,
  Gitlab,
  Bitbucket,
  Oauth,
  Sso
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: <Docker className="h-6 w-6" />,
      skills: [
        { name: "Docker", icon: <Docker className="h-4 w-4" /> },
        { name: "GitHub Actions", icon: <Github className="h-4 w-4" /> },
        { name: "AWS", icon: <Aws className="h-4 w-4" /> },
        { name: "Linux", icon: <Linux className="h-4 w-4" /> },
        { name: "Terraform", icon: <Terraform className="h-4 w-4" /> },
        { name: "Ansible", icon: <Ansible className="h-4 w-4" /> },
        { name: "Kubernetes", icon: <Kubernetes className="h-4 w-4" /> },
      ]
    },
    {
      title: "Frontend Development",
      icon: <Angular className="h-6 w-6" />,
      skills: [
        { name: "Angular", icon: <Angular className="h-4 w-4" /> },
        { name: "JavaScript", icon: <Javascript className="h-4 w-4" /> },
        { name: "TypeScript", icon: <Typescript className="h-4 w-4" /> },
        { name: "HTML5", icon: <Html5 className="h-4 w-4" /> },
        { name: "CSS3", icon: <Css3 className="h-4 w-4" /> },
      ]
    },
    {
      title: "Backend Development",
      icon: <Nodejs className="h-6 w-6" />,
      skills: [
        { name: "Node.js", icon: <Nodejs className="h-4 w-4" /> },
        { name: "REST APIs", icon: <Rest className="h-4 w-4" /> },
        { name: "MongoDB", icon: <Mongodb className="h-4 w-4" /> },
        { name: "Python", icon: <Python className="h-4 w-4" /> },
        { name: "Django", icon: <Django className="h-4 w-4" /> },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Github className="h-6 w-6" />,
      skills: [
        { name: "GitHub", icon: <Github className="h-4 w-4" /> },
        { name: "GitLab", icon: <Gitlab className="h-4 w-4" /> },
        { name: "Bitbucket", icon: <Bitbucket className="h-4 w-4" /> },
        { name: "OAuth", icon: <Oauth className="h-4 w-4" /> },
        { name: "SSO", icon: <Sso className="h-4 w-4" /> },
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
