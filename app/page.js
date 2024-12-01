"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon, Globe, Mail, Phone, Download, ArrowRight } from "lucide-react";
import Image from "next/image";
import profileImage from "../public/Assets/ProfileImage.jpeg"
import { projects } from "../data/data.js";
import ProjectsSection from "@/components/projects";
import ExperienceSection from "@/components/experience";
import SkillsSection from "@/components/skills";
import NavigationBar from "@/components/navigation";
import ContactSection from "@/components/contact";

export default function Component() {
  // Dummy data
  const profileData = {
    name: "BANDA UMAMAHESH",
    title: "Full Stack Developer",
    bio: "I am a passionate and skilled Full Stack Web Developer with a strong focus on frontend technologies. Graduating with a degree in Mechanical Engineering from G Pulla Reddy Engineering College, I honed my expertise in technologies like HTML, React, Next.js, Tailwind CSS, and MongoDB through various internships and professional roles. Currently working as a Frontend Developer at SnapperIT, I am a quick learner, a problem-solver, and always eager to improve my skills and deliver impactful solutions.",
    socials: {
      phone: "9392508242",
      email: "bandaumamahesh1919@gmail.com",
      github: "https://github.com/callasumamahesh",
      linkedin: "https://www.linkedin.com/in/callasumamahesh/",
      portfolio: "https://app.netlify.com/teams/callasumamahesh/sites"
    },
    stats: [
      { label: "Months Experience", value: "6+" },
      { label: "Projects Completed", value: "10+" },
      { label: "Internships", value: "3" }
    ]
  };
  


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-indigo-200">
      {/* Navigation Bar */}
      <NavigationBar />

      {/* Hero Section */}
      <section id="about" className="py-20 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <div className="relative">
                <Card className="relative flex flex-col z-10 transform transition-transform hover:scale-105 overflow-hidden">
                  <CardContent className="p-0 ">
                    <Image
                      src={profileImage}
                      width={400}
                      height={400}
                      alt="Profile"
                      className="w-full h-auto rounded-lg"
                    />

                  </CardContent>

                </Card>

                <Card className="relative z-10 bg-white/80 backdrop-blur-sm mt-10">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <h2 className="text-2xl font-bold text-purple-700">Connect With Me</h2>
                      <div className="flex space-x-6">
                        {[
                          { icon: Phone, link: `tel:${profileData.socials.phone}`, type: "phone" },
                          { icon: Mail, link: `mailto:${profileData.socials.email}`, type: "email" },
                          { icon: GithubIcon, link: profileData.socials.github },
                          { icon: LinkedinIcon, link: profileData.socials.linkedin },
                          { icon: Globe, link: profileData.socials.portfolio },
                        ].map((social, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="icon"
                            className="h-12 w-12 rounded-full border-purple-400 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                            onClick={() => window.open(social.link, "_blank")}
                          >
                            <social.icon className="h-6 w-6" />
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-6">
              <Badge variant="secondary" className="text-sm bg-purple-100 text-purple-700">
                Available for hire
              </Badge>
              <h1 className="text-5xl font-bold bg-gradient-to-r p-4 rounded-sm from-purple-600 to-indigo-600 bg-clip-text text-transparent text-[20px] text-white">
                BANDA UMAMAHESH
              </h1>
              <h2 className="text-2xl font-bold text-purple-700">{profileData.title}</h2>
              <p className="text-[16px] leading-relaxed font-semibold text-gray-6 00">{profileData.bio}</p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="group bg-purple-600 hover:bg-purple-700 text-white">
                  Contact Me
                  <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a href="https://umamaheshresume1.netlify.app/" target="_blank">

                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-100">
                    Download CV
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profileData.stats.map((stat, index) => (
              <Card key={index} className="text-center transform transition-transform hover:scale-105 bg-white/50 backdrop-blur-sm border-purple-200">
                <CardContent className="pt-6">
                  <p className="text-4xl font-bold text-purple-600">{stat.value}</p>
                  <p className="text-purple-700">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <div id="experience">
        <ExperienceSection />
      </div>

      {/* Projects Section */}
      <div id="projects">
        <ProjectsSection />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* Social Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to start a project?</h2>
            <p className="text-lg max-w-2xl">
              I am currently available for freelance work. Let build something amazing together!
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="group bg-white text-purple-600 hover:bg-purple-100"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}