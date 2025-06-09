
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "CTO, TechCorp International",
      content: "Devesh delivered exceptional results on our enterprise platform. His technical expertise and ability to work across time zones made him invaluable to our team.",
      rating: 5,
      company: "TechCorp International"
    },
    {
      name: "Michael Chen",
      role: "Product Manager, StartupXYZ",
      content: "Working with Devesh was a game-changer. He not only delivered quality code but also provided valuable insights that improved our overall architecture.",
      rating: 5,
      company: "StartupXYZ"
    },
    {
      name: "Elena Rodriguez",
      role: "Lead Developer, CloudTech Solutions",
      content: "Devesh's DevOps expertise helped us achieve 99.9% uptime. His proactive approach and deep understanding of cloud technologies are remarkable.",
      rating: 5,
      company: "CloudTech Solutions"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Feedback from satisfied clients and collaborators worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-primary">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
