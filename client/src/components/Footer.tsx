import { Github, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-secondary/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* GitHub Stats Section */}
          <div className="mb-12">
            <Card className="card-gradient border-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">GitHub Activity</h3>
                  <p className="text-muted-foreground">Check out my latest contributions and projects</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">150+</div>
                    <div className="text-sm text-muted-foreground">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Commits</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button asChild>
                    <a href="https://github.com/ryanmunge" target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      View GitHub Profile
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gradient">Ryan Munge</h3>
              <p className="text-muted-foreground">Full Stack Developer & Problem Solver</p>
              <p className="text-sm text-muted-foreground mt-1">Building the future, one line of code at a time</p>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/ryanmunge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                title="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://linkedin.com/in/ryanmunge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://twitter.com/ryanmunge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform"
                title="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2025 Ryan Munge. All rights reserved. Built with React, TypeScript, and a lot of ☕
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;