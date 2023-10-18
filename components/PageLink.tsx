import React from 'react';
import Link from 'next/link';

const PageLink = () => {
  return (
    <div className="flex justify-center space-x-4">
      <Link href="/works" className="text-xl font-bold">Works</Link>
      <Link href="/skills" className="text-xl font-bold">Skill</Link>
      <Link href="/about" className="text-xl font-bold">About</Link>
    </div>
  );
};

export default PageLink;

