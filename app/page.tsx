"use client"
import React, { useState } from 'react';
import Introduction from '@/components/Introduction';
import { motion, AnimatePresence } from 'framer-motion';
import Hobby from "@/components/Hobby";
import HobbyList from '@/app/data/HobbyList';

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      style={{ padding: '20px' }}
    >
      <div>
        <Introduction />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ textAlign: "center", marginTop: '20px', marginBottom: '20px' }}>
        <div className="text-2xl font-semibold mt-4">趣味</div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={slideIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
          >
            <Hobby hobbyData={HobbyList[slideIndex]} />
          </motion.div>
        </AnimatePresence>
        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <button style={{ marginRight: '20px', marginTop: '10px', marginBottom: '10px' }} onClick={() => setSlideIndex(prev => (prev - 1 + HobbyList.length) % HobbyList.length)}>Previous</button>
          <button style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }} onClick={() => setSlideIndex(prev => (prev + 1) % HobbyList.length)}>Next</button>
        </div>
      </div>
    </motion.div>
  );
}





