'use client'

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GithubIcon, ExternalLink } from "lucide-react";
import BookYourShow from '../public/Assets/BookYourShow.webp'
import midStart from '../public/Assets/midStart.webp'
import MovieWebsite from '../public/Assets/MovieWebsite.webp'
import ResponseForm from '../public/Assets/ResponseForm.webp'
import TakeWhatYouWant from '../public/Assets/TakeWhatYouWant.webp'
import Image from 'next/image';

export default function ProjectsSection() {
  // Function to handle external links
  const handleLinkClick = (url) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  // Dummy project data
  const projects = [
    {
      id: 1,
      title: "E - Commerce Website",
      description: "During this project, I gained valuable experience working with Express and MongoDB for backend development. Using Next.js, I created a fully functional e-cart website that includes essential features such as user signup and signin, a comprehensive cart system, and various filtering options for easy product navigation. Users can add or remove items from their cart and proceed to checkout smoothly. This project provided hands-on exposure to creating a responsive, feature-rich e-commerce platform powered by modern web technologies.",
      image: TakeWhatYouWant,
      category: "Web App",
      technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS", "CSS"],
      liveUrl: "https://ecarttakewhatyouwant.vercel.app/",
      githubUrl: "https://github.com/callasumamahesh/task1",
      featured: true
    },
    {
      id: 2,
      title: "Book My Show Clone",
      description: "This Book My Show website clone replicates the user experience of the original platform, featuring added authentication functionality. Upon logging in, users are greeted by a homepage displaying a curated list of movies. After selecting a movie, they’re taken to a detailed overview page where they can view information about the film as well as a list of nearby theaters screening it. By choosing a theater, users can see the available seats in real time, allowing them to select their preferred seats. Once seats are selected, users proceed seamlessly to the checkout page to complete their booking. This clone combines intuitive navigation with secure authentication to provide a smooth, theater-style ticketing experience.",
      image: BookYourShow,
      category: "Web",
      technologies: ['HTML','CSS','JAVASCRIPT','REACT','API',],
      liveUrl: "https://bookyourticket.netlify.app/",
      githubUrl: "https://github.com/callasumamahesh/Book-Your-Ticket",
      featured: true
    },
    {
      id: 3,
      title: "Imdb Website Clone ",
      description: "This IMDb website clone provides a dynamic movie browsing experience, leveraging Firebase as its backend database to enable real-time data synchronization without page reloads. The homepage showcases popular categories like Now Playing, Top Movies, and Popular Movies, allowing users to explore diverse movie selections seamlessly. Upon selecting a movie, users can view comprehensive details including plot, ratings, release information, and an extensive list of cast and crew members. Additionally, the movie page displays user reviews and similar movie recommendations. Users can contribute by adding or editing their own reviews, with changes instantly reflected for all viewers, thanks to Firebase’s real-time capabilities. This clone offers a responsive, intuitive interface for exploring movies, reading reviews, and engaging with content through interactive review features.",
      image: MovieWebsite,
      category: "IoT",      
      technologies: ['HTML','CSS','JAVASCRIPT','REACT','API',],
      liveUrl: "https://cinemaelx.netlify.app/",
      githubUrl: "https://github.com/callasumamahesh/Cinema-ELX",
      featured: false
    },
    {
      id: 4,
      title: "Mid Start",
      description: "The Med Start website is a simple yet highly practical tool designed to help users locate nearby hospitals. Upon visiting, users are prompted to grant location access. Once permission is given, the website displays a list of hospitals in the vicinity. Selecting a hospital provides step-by-step directions to reach it, offering an easy-to-follow guide with each step. To enhance user experience, a checkbox accompanies each step, allowing users to mark steps as completed, which helps track their progress. Additionally, the site retains this progress, so if users refresh the page, previously completed steps remain checked. This feature ensures a seamless, user-friendly experience when navigating to healthcare facilities.",
      image: midStart,
      category: "Web",
      technologies: ['HTML','CSS','JAVASCRIPT','REACT','API',],
      liveUrl: "https://findyourhospital.netlify.app/",
      githubUrl: "https://github.com/callasumamahesh/Mid-Start",
      featured: true
    },
    {
      id: 5,
      title: "Responsive Form",
      description: "The Informatic Ve App is a highly responsive web application designed to provide a seamless form-filling experience across devices. This application adapts smoothly to various screen sizes, making it ideal for both desktop and mobile users. Built with a user-friendly interface, the form allows users to input information efficiently, with real-time feedback and validation to enhance accuracy. This website showcases best practices in responsive design, ensuring that each element adjusts perfectly to offer an intuitive and accessible experience, no matter the device.",
      image: ResponseForm,
      category: "Web",
      technologies: ['HTML','CSS','JAVASCRIPT','REACT','API',],
      liveUrl: "https://informaticveapp.netlify.app/",
      githubUrl: "",
      featured: true
    },
  ];

  // Project Card Component
  const ProjectCard = ({ project }) => (
    <Card className="group overflow-hidden color-white border-2 border-purple-200 hover:border-purple-600 transition-colors bg-white/80 backdrop-blur-sm">
      <div className="grid md:grid-cols-2 gap-6 pr-4 md:pr-0">
        <div className="overflow-hidden">
          <Image
            src={project.image}
            width={400}
            height={400}
            alt={project.title}
            className="w-full h-full object-fit m-2 rounded-sm object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="pl-4 p-0 md:p-6 space-y-4">
          <CardHeader className="p-0">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="text-sm bg-purple-100 text-purple-700">
                {project.category}
              </Badge>
              {project.featured && (
                <Badge variant="default" className="bg-purple-600 text-white">
                  Featured
                </Badge>
              )}
            </div>
            <CardTitle className="text-2xl font-bold mb-2 text-purple-800">{project.title}</CardTitle>
            <p className='text-[16px]'>
              {project.description}
            </p>
          </CardHeader>

          <CardContent className="p-0">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="border-purple-300 text-purple-700">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-0 pt-4 flex gap-4">
            <Button 
              onClick={() => handleLinkClick(project.liveUrl)}
              className="group/button bg-purple-600 hover:bg-purple-700 text-white"
            >
              Live Demo
              <ExternalLink className="ml-2 h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              onClick={() => handleLinkClick(project.githubUrl)}
              className="border-purple-600 text-purple-600 hover:bg-purple-100"
            >
              Source Code
              <GithubIcon className="ml-2 h-4 w-4" />
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-b color-[4B5633] from-purple-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-purple-800">Featured Projects</h2>
          <p className="text-purple-700 text-lg max-w-2xl mx-auto">
            Discover some of my recent work. Each project is crafted with attention to detail and modern technologies.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">

          <TabsContent value="all" className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </TabsContent>

          <TabsContent value="web" className="space-y-8">
            {projects
              .filter(p => p.category === "Web App")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="ai" className="space-y-8">
            {projects
              .filter(p => p.category === "AI/ML")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>

          <TabsContent value="iot" className="space-y-8">
            {projects
              .filter(p => p.category === "IoT")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </TabsContent>
          <p className='text-center mt-2'>For more Projects <a href='https://app.netlify.com/teams/callasumamahesh/sites' target='_blank'><span className='color-blue' >Click here!</span></a></p>
        </Tabs>
      </div>
    </section>
  );
}