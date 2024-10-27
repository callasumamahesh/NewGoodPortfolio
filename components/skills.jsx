import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Briefcase, Brain, Rocket } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Skills",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "HTML", level: 5 },
        { name: "CSS", level: 4 },
        { name: "JavaScript", level: 4 },
        { name: "React js", level: 4 },
        { name: "Next js", level: 4 },
        { name: "WordPress", level: 3 },
      ]
    },
    {
      title: "Backend Skills",
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: "Node js", level: 4 },
        { name: "Express", level: 4 },
        { name: "Mongo DB", level: 4 },
        { name: "SQL", level: 3 },
        { name: "Python", level: 4 },
        { name: "Django", level: 2 },
      ]
    },
    {
      title: "Soft Skills",
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: "Communication", level: 5 },
        { name: "Collaboration", level: 5 },
        { name: "Adaptability", level: 4 },
        { name: "Time Management", level: 4 },
      ]
    }
  ];

  const renderStars = (level) => {
    return Array(5).fill(0).map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < level ? 'text-purple-600 fill-purple-600' : 'text-gray-300'}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="w-full p-4 md:p-6 from-purple-100 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Rocket className="w-6 h-6 text-purple-700" />
          <h2 className="text-2xl font-bold text-purple-700">Skills & Expertise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.title} className="h-full shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-2 pb-2">
                <div className="text-purple-700">
                  {category.icon}
                </div>
                <CardTitle className="text-lg font-semibold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between space-y-2">
                      <Badge 
                        variant="secondary" 
                        className="w-fit bg-purple-50 text-purple-700 hover:bg-purple-100 whitespace-nowrap text-sm px-3 py-1"
                      >
                        {skill.name}
                      </Badge>
                      <div className="flex gap-1">
                        {renderStars(skill.level)}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;