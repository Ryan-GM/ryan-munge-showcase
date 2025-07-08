import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 78 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS/Cloud", level: 70 },
        { name: "CI/CD", level: 72 }
      ]
    }
  ];

  const languages = [
    "JavaScript", "TypeScript", "Python", "HTML/CSS", "SQL", "Bash"
  ];

  const frameworks = [
    "React", "Next.js", "Vue.js", "Node.js", "Express", "FastAPI", "Django", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skill Levels */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">
                Proficiency Levels
              </h3>
              <div className="space-y-8">
                {skillCategories.map((category, index) => (
                  <Card key={index} className="card-gradient border-border hover:glow transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">
                        {category.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="group">
                            <div className="flex justify-between mb-2">
                              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                {skill.name}
                              </span>
                              <span className="text-sm text-muted-foreground font-mono">
                                {skill.level}%
                              </span>
                            </div>
                            <Progress value={skill.level} className="h-2 transition-all duration-300 group-hover:h-3" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Technologies */}
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-primary">
                Technologies
              </h3>
              
              <Card className="card-gradient border-border mb-8">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((language, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent/20 transition-colors"
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient border-border">
                <CardHeader>
                  <CardTitle className="text-lg text-primary">
                    Frameworks & Libraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {frameworks.map((framework, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors"
                      >
                        {framework}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-primary">
                  What I'm Learning
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Currently expanding my knowledge in machine learning, 
                  serverless architectures, and advanced cloud services. 
                  Always excited to explore new technologies and stay 
                  current with industry trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;