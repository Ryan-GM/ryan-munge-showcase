import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution that transformed a local retailer's business model.",
      challenge: "Client needed to pivot from brick-and-mortar to online sales during COVID-19.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      role: "Full-stack Developer",
      outcome: "Boosted client sales by 35% and reduced operational costs by 20%",
      features: ["User authentication", "Payment processing", "Admin dashboard", "Inventory management"],
      github: "https://github.com/Ryan-GM/totog-commerce-hub.git",
      demo: "https://totog-commerce-hub.vercel.app"
    },
    {
      title: "Task Management App",
      description: "A collaborative platform that streamlined workflow for a 50-person remote team.",
      challenge: "Team struggled with task visibility and deadline management across time zones.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Socket.io", "Redis"],
      role: "Lead Developer",
      outcome: "Improved team productivity by 40% and reduced missed deadlines by 60%",
      features: ["Real-time collaboration", "Advanced filtering", "Time tracking", "Team analytics"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive PWA providing hyper-local weather data for agricultural businesses.",
      challenge: "Farmers needed precise, location-specific weather data for crop planning.",
      tech: ["React", "PWA", "Chart.js", "Weather APIs", "Service Workers"],
      role: "Frontend Developer",
      outcome: "Helped farmers reduce crop loss by 25% through better weather prediction",
      features: ["Interactive maps", "Weather alerts", "Historical data", "Offline functionality"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics platform that automated reporting for digital marketing agencies.",
      challenge: "Agency spent 15+ hours weekly on manual social media report generation.",
      tech: ["Vue.js", "Python", "D3.js", "Redis", "Docker"],
      role: "Full-stack Developer",
      outcome: "Reduced report generation time by 90% and increased client satisfaction scores",
      features: ["Multi-platform integration", "Automated reporting", "Custom dashboards", "Client portals"],
      github: "https://github.com/Ryan-GM/Social-Pulse-Analytics-.git",
      demo: "https://social-pulse-analytics.onrender.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border hover:glow transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">✅ Role:</h4>
                      <p className="text-sm text-muted-foreground">{project.role}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-1">💡 Outcome:</h4>
                      <p className="text-sm text-muted-foreground">{project.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-primary mb-2">🛠️ Tech Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        🔗 Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
