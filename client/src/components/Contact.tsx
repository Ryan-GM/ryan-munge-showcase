import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  📞 Let's Talk
                </CardTitle>
                <p className="text-muted-foreground">
                  Ready to bring your project to life? I'd love to hear about your vision and discuss how I can help make it reality.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm always interested in new opportunities, challenging projects, 
                    and meaningful collaborations. Whether you have a project in mind 
                    or just want to chat about technology, feel free to reach out!
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="text-primary" size={20} />
                      <span className="text-muted-foreground">ryan.munge@email.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-primary" size={20} />
                      <span className="text-muted-foreground">Available for remote work</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    Follow Me
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" asChild>
                      <a 
                        href="https://github.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={20} />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin size={20} />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="text-center pt-8">
                <p className="text-muted-foreground">
                  Looking forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;