"use client"
import Introduction from '@/components/Introduction';
import Link from 'next/link';
import {motion} from 'framer-motion';


export default function Home() {
  return (
    <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    viewport={{ once: true }}
  >
      <div>
        <Introduction />
      </div>
    </motion.div>
  );
}


