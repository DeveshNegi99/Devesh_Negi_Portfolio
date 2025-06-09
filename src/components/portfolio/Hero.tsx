
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Devesh Singh Negi
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Turning ideas into scalable tech solutions
          </p>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg md:text-xl text-foreground max-w-2xl mx-auto leading-relaxed">
            Senior Software Developer with 5+ years of experience delivering 15+ global projects. 
            Specializing in full-stack development, DevOps, and scalable cloud solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={scrollToContact} className="group">
              Hire Me
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToProjects}>
              View Projects
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Global Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};
