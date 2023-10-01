import React from 'react';
import Link from 'next/link';
import AboutList from '@/app/data/AboutList';


const Page = () => {
  return (
    <div>
      <h1>About</h1>
      <ul>
        {AboutList.map((about) => (
          <li key={about.title}>
            <h2>{about.title}</h2>
            <p>{about.subtitle}</p>
          </li>
        ))}
      </ul>
      <Link href="/">ホーム</Link>
    </div>
  );
};

export default Page;