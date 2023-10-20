'use client'
import React from 'react';
import AboutList from '@/app/data/AboutList';
import { motion, useScroll } from 'framer-motion';

const Page = () => {
  const { scrollXProgress } = useScroll();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      style={{ scaleY: scrollXProgress }}
    >
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h1 className="text-3xl font-semibold mb-8">About</h1>
          <div className="flex flex-col -mx-4">
            {AboutList.map((about) => (
              <div key={about.title} className="w-full px-4 mb-8">
                <div className="bg-white p-4 rounded shadow-md">
                  <h2 className="text-xl font-semibold mb-2">{about.date}</h2>
                  <h2 className="text-xl font-semibold mb-2">{about.title}</h2>
                  <p className="text-gray-600">{about.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;




