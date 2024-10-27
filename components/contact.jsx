import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github as GithubIcon, Linkedin as LinkedinIcon, Globe, Phone, Mail } from "lucide-react";

const ContactSection = () => {
    // Sample profile data - replace with your actual data
    const profileData = {
        socials: {
            phone: "9392508242",
            email: "bandaumamahesh1919@gmail.com",
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            portfolio: "https://yourportfolio.com"
        }
    };

    return (
        <section className="py-16 bg-gradient-to-r from-purple-100 to-indigo-200 backdrop-blur-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center space-y-6 md:flex-row justify-evenly">
                    <section className='flex flex-col gap-3 justify-center items-center'>
                        <h2 className="text-3xl font-bold text-purple-700">Connect With Me</h2>
                        <div className="flex space-x-6">
                            {[
                                { icon: Phone, link: `tel:${profileData.socials.phone}`, type: 'phone' },
                                { icon: Mail, link: `mailto:${profileData.socials.email}`, type: 'email' },
                                { icon: GithubIcon, link: profileData.socials.github },
                                { icon: LinkedinIcon, link: profileData.socials.linkedin },
                                { icon: Globe, link: profileData.socials.portfolio },
                            ].map((social, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="icon"
                                    className="h-12 w-12 rounded-full border-purple-400 text-purple-600 hover:bg-purple-100 hover:text-purple-700 transition-colors"
                                    onClick={() => window.open(social.link, '_blank')}
                                >
                                    <social.icon className="h-6 w-6" />
                                </Button>
                            ))}
                        </div>
                    </section>

                    {/* Contact Form */}
                    <div className="w-full max-w-md mt-12">
                        <form className="space-y-6" action="https://submit-form.com/cezoFOlaz">
                            <div>
                                <Input
                                    placeholder="Your Name"
                                    className="w-full border-purple-400 focus:ring-purple-700 bg-white/80"
                                />
                            </div>
                            <div>
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border-purple-400 focus:ring-purple-700 bg-white/80"
                                />
                            </div>
                            <div>
                                <Textarea
                                    placeholder="Your Message"
                                    className="w-full min-h-[150px] border-purple-400 focus:ring-purple-700 bg-white/80"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-purple-700 hover:bg-purple-600 text-white"
                            >
                               Send Message 
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;