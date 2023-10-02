import React from 'react';
import Image from 'next/image';

const IconIntroduction = () => {
  return (
    <div className="flex items-center justify-center">
      <div>
        <Image
          src="/img/github.png"
          height={50}
          width={50}
          alt="GitHubのIcon画像"
        />
      </div>
    </div>
  );
}

export default IconIntroduction;
