import React from 'react';
import Image from 'next/image';

const IconIntroduction = () => {
  return (
    <div className="flex items-center justify-center">
      <a href="https://github.com/takumihashimoto0218" target="_blank">
        <Image
          src="/img/github.png"
          height={50}
          width={50}
          alt="GitHubのIcon画像"
        />
      </a>
    </div>
  );
}

export default IconIntroduction;