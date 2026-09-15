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
                    I'm a passionate full stack developer who discovered my love for coding 
                    through solving real-world problems. What started as curiosity about 
                    how websites work has evolved into a mission to create digital experiences 
                    that genuinely improve people's lives and businesses.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Beyond the code, I'm fascinated by the intersection of technology and human 
                    behavior. I believe great software isn't just about clean code—it's about 
                    understanding users and building solutions that feel intuitive and delightful.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, 
                    mentoring junior developers, or diving into books about design psychology 
                    and user experience. I'm always eager to take on new challenges and 
                    collaborate with teams who share my passion for excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">
                  Services I Offer
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Web Development (Full-stack solutions)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Frontend Development (React, Next.js, TypeScript)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Backend Development (Node.js, APIs, Databases)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    AI/Automation Tools & Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    Maintenance & Support
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