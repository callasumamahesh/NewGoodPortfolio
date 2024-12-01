'use client'

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MonitorPlay, 
  Building2, 
  GraduationCap, 
  MapPin,
  Calendar,
  Trophy,
  Code2,
  ExternalLink
} from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      type: "work",
      title: "Junior Frontend Developer",
      company: "Snapper IT",
      location: "Colossal fortuna,Kakatiya Hills.",
      period: "2024 - Present",
      description: "I am employed as a Frontend Developer at the innovative business SnapperIT, where I create dynamic online apps. I am now working on a real-time attendance software at SnapperIT to simplify the process of recording attendance. Check-ins, check-outs, attendance reports, and leave management are all included in the app, which offers administrators and staff a smooth experience. The program guarantees effectiveness and seamless user interactions by utilizing Next.js for server-side rendering and useContext for global state management.Additionally, I worked on Wordpress to construct a portion of the Paino website.",
      IconComponent: Building2,
      skills: ["Next Js","React", "JavaScript","Tailwind CSS",'WordPress'],
      achievements: [
        "Understanding the real time company policies.",
        "Implementing a real time Attendance App."
      ],
      link: "https://www.snapperit.com/"
    },
    {
      id: 2,
      type: "Internship",
      title: "Full Stack Developer",
      company: "Ravulapati Tech Hub - Internship",
      location: "T-hub,Madhapur,Hyderabad.",
      period: "May 2024 - August 2024",
      description: " This internship has taught me how to use Express and MongoDB on the backend.I created an e-cart website by using Next js during this internship which has amazing features like signup, signin, cart functionality, Adding products to your cart as well as removing products from your cart and checkout page, to view it visit the link below.",
      IconComponent: Building2,
      skills: ["MongoDB", "Express.js", "React", "Node.js", "Next Js",'Tailwind CSS'],
      achievements: [
        "Implemented a real time small app."
      ],
      link: "https://digitalsolutions.com"
    },
    {
      id: 3,
      type: "Internship",
      title: "Frontend Developer.",
      company: "Bharat Intern - Internship",
      period: "May 2024 - August 2024",
      description: " During this internship, I had learn about the well-known and excellent React JavaScript framework. I had learn all topics in react, like components, routing, and hooks, through this internship. During this internship, I developed the website BookYourTicket.In a similar vein, when you click on Book My Show, a movie list with nearby theaters is displayed, and you can purchase a ticket as well..",
      IconComponent: Building2,
      skills: ["HTML","CSS","JavaScript",'React','Api'],
      achievements: [
        "Implemented a real time small app."
      ],
      link: "https://digitalsolutions.com"
    },
    {
      id: 4,
      type: "Internship",
      title: "Full Stack Developer",
      company: "Ravulapati Tech Hub - Internship",
      location: "T-hub,Madhapur,Hyderabad.",
      period: "May 2024 - August 2024",
      description: " This internship has taught me HTML, CSS, and JavaScript. During my internship, I built a projects that taught me how to create responsive websites. i.e I created a notepad website with local storage and it has features like ceateing note, edit the note, adding tasks to note, added a checkbox to identify the task is complete or not.To view the website, click the below link.",
      IconComponent: Building2,
      skills: ["HTML","CSS","JavaScript"],
      achievements: [
        "Implemented a real time Notes app."
      ],
      link: "https://digitalsolutions.com"
    },
  ];

  const ExperienceCard = ({ experience }) => {
    const IconComponent = experience.IconComponent;

    return (
      <Card className="border-l-4 border-l-purple-600 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300 pr-4">
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <div className="p-3 rounded-full bg-purple-100">
              <IconComponent className="h-6 w-6 text-purple-600" />
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-purple-700">{experience.title}</h3>
                    <div className="flex items-center gap-2 text-purple-600">
                      <Building2 className="h-4 w-4" />
                      <span>{experience.company}</span>
                    </div>
                  </div>
                  <a 
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>

                <div className="flex flex-wrap gap-4 mt-2 text-sm text-purple-600">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {experience.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {experience.period}
                  </div>
                </div>
              </div>

              <p className="">{experience.description}</p>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Code2 className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold text-purple-700">Key Skills</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="h-4 w-4 text-purple-600" />
                    <h4 className="font-semibold text-purple-700">Key Achievements</h4>
                  </div>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-purple-700">Professional Experience</h2>
          <p className="text-purple-600 text-lg max-w-2xl mx-auto">
            A timeline of my professional journey and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;