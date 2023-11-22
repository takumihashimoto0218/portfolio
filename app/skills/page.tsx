'use client';
import React from 'react';
import { SkillList } from "@/app/data/SkillList";
import Image from 'next/image';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
    >
      <div className="p-2 bg-white">
        <h1 className="text-4xl text-center text-black leading-normal font-mono mb-5">
          My Skill List
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {SkillList.map((skill) => (
            <div className="col-span-1" key={skill.title}>
              <div className="border border-gray-300 shadow-md p-4">
                <h2 className="text-lg mb-2">{skill.title}</h2>
                <div>
                  <Image
                    src={`/img/skillimage/${skill.imagePath}`}
                    alt={skill.title}
                    height={50}
                    width={50}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
