import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="card-gradient border-border">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    Full Stack Developer
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    I'm a passionate full stack developer with a love for creating 
                    innovative web applications that solve real-world problems. With 
                    expertise in modern JavaScript frameworks and backend technologies, 
                    I bring ideas to life through clean, efficient code.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open source projects, or sharing knowledge with 
                    the developer community.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  What I Do
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Frontend Development (React, TypeScript, Next.js)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Backend Development (Node.js, Python, APIs)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Database Design & Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    UI/UX Design & Implementation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    DevOps & Cloud Deployment
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  My Approach
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing maintainable code, following best practices, 
                  and creating user experiences that are both beautiful and functional. 
                  Every project is an opportunity to learn and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;