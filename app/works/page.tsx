import React from 'react';
import WorkList from '@/app/data/WorkList';
import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <h1>My Work List</h1>
      <ul>
        {WorkList.map((work) => (
          <li key={work.title}>
            <h2>{work.title}</h2>
            <p>{work.description}</p>
            {/* その他のコンテンツを表示 */}
          </li>
        ))}
      </ul>
      <Link href="/">ホーム</Link>
    </div>
  );
};

export default Page;
