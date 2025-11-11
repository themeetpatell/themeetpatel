import React from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin, Twitter, Github, Instagram, Youtube, Calendar, BookOpen as Medium
} from 'lucide-react';

const FollowMyJourney = () => {
  const contactInfo = {
    linkedin: "https://www.linkedin.com/in/themeetpatel/",
    twitter: "https://x.com/the_meetpatel",
    github: "https://github.com/themeetpatell",
    instagram: "http://instagram.com/the.meetpatell/",
    youtube: "https://youtube.com/@themeetpatel",
    medium: "https://medium.com/@themeetpatel",
    calendly: "https://calendly.com/themeetpatell/quick-connect"
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Follow My Journey</h2>
          <p className="text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with my latest work, insights, and journey across channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
          {[
            { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
            { icon: Twitter, href: contactInfo.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
            { icon: Github, href: contactInfo.github, label: 'GitHub', color: 'hover:text-gray-400' },
            { icon: Instagram, href: contactInfo.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
            { icon: Youtube, href: contactInfo.youtube, label: 'YouTube', color: 'hover:text-red-400' },
            { icon: Medium, href: contactInfo.medium, label: 'Medium', color: 'hover:text-green-400' },
            { icon: Calendar, href: contactInfo.calendly, label: 'Calendly', color: 'hover:text-blue-400' }
          ].map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/30 backdrop-blur-md p-6 text-center group hover:scale-105 transition-all duration-300 border border-purple-200/50 rounded-xl"
            >
              <div className={`w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600 ${social.color} transition-all duration-300 group-hover:bg-purple-200`}>
                <social.icon className="w-6 h-6" />
              </div>
              <h3 className="text-gray-900 font-semibold mb-1 group-hover:text-purple-600 transition-colors">
                {social.label}
              </h3>
              <p className="text-gray-600 text-sm">
                Follow
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowMyJourney;
