"use client";

import React, { useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import { FaMapMarkerAlt, FaClock, FaCity, FaMapSigns, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function ServiceAreasSection() {
  // Use client-side only state
  const [isMounted, setIsMounted] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  // Only enable animations after component is mounted on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Service area details
  const areas = [
    {
      name: "Burlington Central",
      icon: FaMapMarkerAlt,
      details: "Conveniently located near major routes (QEW, 407)."
    },
    {
      name: "North Burlington",
      icon: FaCity,
      details: "Serving communities like Alton Village and Millcroft."
    },
    {
      name: "Waterdown",
      icon: FaCity,
      details: "Easily accessible for Waterdown residents."
    },
    {
      name: "Oakville & Hamilton",
      icon: FaMapSigns,
      details: "Welcoming patients from neighbouring cities."
    }
  ];

  const itemVariant = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      }
    }
  };

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const hoursData = [
    { day: "Monday - Friday", hours: "2:00 PM - 8:00 PM" },
    { day: "Saturday", hours: "Available upon request" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="service-areas" className="py-20 lg:py-28 bg-gradient-to-b from-white to-primary-50/30 text-gray-800 relative border-t border-neutral-200">
      {/* Background patterns */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-pattern"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-200/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="mb-10 md:mb-14 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block rounded-full px-3 md:px-4 py-1 bg-accent/10 text-accent text-xs md:text-sm font-medium mb-4 md:mb-6 border border-accent/20 shadow-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Service Areas
          </motion.div>
          
          <motion.h2 
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-800 mb-4 md:mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Where I Provide Care
          </motion.h2>
          
          <motion.p 
            className="text-primary-600 leading-relaxed md:text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Serving communities across Greater Vancouver with dedicated physiotherapy care.
          </motion.p>
        </motion.div>

        {/* Enhanced hero image section with improved image treatment and text visibility */}
        <motion.div
          initial={isMounted ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
          whileInView={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "50px" }}
          className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl mb-16 aspect-[16/7]"
        >
          <Image
            src="/images/facebook-image.jpg"
            alt="KH Physiotherapy clinic in Burlington"
            fill
            className="object-cover object-center"
            style={{ 
              filter: 'brightness(1.2) contrast(1.15) saturate(1.3)',
              transform: 'scale(1.01)',
            }}
            priority={true}
          />
          
          {/* Enhanced overlay gradient for better text visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-800/50 to-transparent"></div>
          
          {/* Additional subtle vignette for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.3)]"></div>
          
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-12 text-white z-10">
            <div className="max-w-3xl">
              <div className="inline-block bg-accent text-white text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-lg backdrop-blur-sm">
                Centrally Located
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold mb-3 drop-shadow-lg text-white">
                Easy access from surrounding communities
              </h3>
              <p className="text-white text-lg md:text-xl drop-shadow-lg max-w-2xl">
                Conveniently positioned at 4631 Palladium Wy Unit 6, Burlington, ON L7M 0W9
              </p>
            </div>
          </div>
        </motion.div>

        {/* Redesigned cards layout with consistent heights and aligned buttons */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 -mt-12">
            {/* Card 1: Practice Location */}
            <motion.div 
              variants={itemVariant}
              initial="hidden"
              animate={isMounted && isVisible ? "visible" : "hidden"}
              transition={{ delay: 0, duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200 transform-gpu hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div 
                    className="premium-icon-badge premium-icon-badge-circle premium-icon-badge-accent mr-3 flex items-center justify-center"
                    style={{
                      boxShadow: '0 8px 20px -4px rgba(231, 169, 49, 0.25), 0 0 0 1px rgba(231, 169, 49, 0.1)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(250, 240, 210, 0.8), rgba(240, 210, 140, 0.4))'
                    }}
                  >
                    <FaMapMarkerAlt className="h-4 w-4" style={{ color: '#D8B458' }} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-800">Practice Location</h3>
                </div>
                
                <p className="text-gray-700 font-medium">
                  4631 Palladium Wy Unit 6, Burlington, ON L7M 0W9
                </p>
                
                <p className="text-primary-700 my-4 text-sm leading-relaxed flex-grow">
                  Strategically positioned for quick access from downtown Burlington, North Burlington, Waterdown, Oakville, and Hamilton.
                </p>
                
                <Link 
                  href="https://maps.app.goo.gl/JC7uKnd9zW4AJPP49" 
                  target="_blank"
                  className="inline-flex items-center justify-center text-white bg-accent hover:bg-accent-dark px-4 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium w-full mt-3"
                  style={{ boxShadow: '0 4px 14px rgba(231, 169, 49, 0.2)' }}
                >
                  Get Directions <FaMapMarkerAlt className="ml-2 h-3 w-3" />
                </Link>
              </div>
            </motion.div>
            
            {/* Card 2: Communities Served */}
            <motion.div 
              variants={itemVariant}
              initial="hidden"
              animate={isMounted && isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.05, duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200 transform-gpu hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div 
                    className="premium-icon-badge premium-icon-badge-circle premium-icon-badge-primary mr-3 flex items-center justify-center"
                    style={{
                      boxShadow: '0 8px 20px -4px rgba(58, 125, 159, 0.2), 0 0 0 1px rgba(58, 125, 159, 0.1)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(210, 235, 245, 0.8), rgba(100, 170, 200, 0.4))'
                    }}
                  >
                    <FaCity className="h-4 w-4" style={{ color: '#1D4552' }} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-800">Communities I Serve</h3>
                </div>
                
                <ul className="space-y-2 text-sm flex-grow">
                  {areas.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <area.icon className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-primary-800">{area.name}</span>
                        <p className="text-primary-600 text-xs">{area.details}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 pt-3 border-t border-neutral-100 text-xs text-primary-700">
                  I also welcome patients from Milton, Flamborough, Dundas, Ancaster, and Aldershot areas.
                </div>
                
                {/* Empty div to maintain consistent spacing from content to edge */}
                <div className="mt-3"></div>
              </div>
            </motion.div>
            
            {/* Card 3: Operating Hours */}
            <motion.div 
              variants={itemVariant}
              initial="hidden"
              animate={isMounted && isVisible ? "visible" : "hidden"}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200 transform-gpu hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div 
                    className="premium-icon-badge premium-icon-badge-circle premium-icon-badge-accent mr-3 flex items-center justify-center"
                    style={{
                      boxShadow: '0 8px 20px -4px rgba(231, 169, 49, 0.25), 0 0 0 1px rgba(231, 169, 49, 0.1)',
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(250, 240, 210, 0.8), rgba(240, 210, 140, 0.4))'
                    }}
                  >
                    <FaClock className="h-4 w-4" style={{ color: '#D8B458' }} />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary-800">Operating Hours</h3>
                </div>
                
                <div className="space-y-2.5 flex-grow">
                  {hoursData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center text-sm pb-2 border-b border-neutral-100 last:border-0">
                      <span className="font-medium text-primary-800">{item.day}</span>
                      <span className="text-primary-700">{item.hours}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  className="mx-auto text-center mt-8 inline-flex items-center rounded-full bg-accent px-5 py-3 text-base font-medium text-white shadow-md hover:bg-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent/50 transition-colors duration-300"
                  href="https://endorphinshealth.janeapp.com/#/staff_member/42"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaCalendarAlt className="mr-2 h-3 w-3" /> Book Your Appointment
                </a>
              </div>
            </motion.div>
          </div>
          
          {/* Call button for mobile - displayed separately below cards */}
          <div className="mt-6 md:hidden">
            <Link 
              href="tel:+19056346000" 
              className="inline-flex items-center justify-center text-primary-800 bg-primary-100 hover:bg-primary-200 px-4 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-base font-medium w-full"
            >
              <FaPhoneAlt className="h-4 w-4 mr-2" />
              Call Me at 905-634-6000
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}