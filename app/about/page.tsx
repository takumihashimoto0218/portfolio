'use client'
import React from 'react';
import AboutList from '@/app/data/AboutList';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h3 className="text-3xl font-mono text-center mt-8 mb-8">
            About
          </h3>
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