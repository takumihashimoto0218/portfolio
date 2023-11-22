'use client'
import React from 'react';
import WorkList from '@/app/data/WorkList';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-mono text-center mt-8 mb-8">
        My Work List
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {WorkList.map((work) => (
          <div key={work.title} className="col-span-1">
            <div className="bg-whitesmoke h-full">
              <Image
                src={`/img/workimage/${work.imagePath}`}
                height={work.imageHeight}
                width={work.cardWidth}
                alt={work.title}
              />
              <div className="flex flex-col p-4">
                <h6 className="text-lg mb-2">{work.title}</h6>
                <p className="text-base">{work.description}</p>
                <div>
                  {work.tips.map((tip, index) => (
                    <span key={index} className="bg-lightgray border border-gray-300 rounded-full px-2 py-1 text-sm mr-1 mb-1">
                      {tip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Page;