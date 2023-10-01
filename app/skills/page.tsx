import React from 'react';
import Link from 'next/link';
import { SkillList } from '../data/Skills';

const Page = () => {
  return (
    <div>
      <h1>My Skill List</h1>
      <ul>
        {SkillList.map((skill) => (
          <li key={skill.title}>
            <h2>{skill.title}</h2>
          </li>
        ))}
      </ul>
      <Link href="/">ホーム</Link>
    </div>
  );
};

export default Page;