import Image from 'next/image';
import IconIntroduction from './IconIntroduction';
import PageLink from './PageLink';

const Introduction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-screen-lg p-4 bg-gray-100 rounded-lg shadow-md text-center">
        <div className="mb-8 flex justify-center items-center">
          <div className="rounded-full overflow-hidden w-40 h-40">
            <Image
              src="/img/takumi.JPG"
              height={200}
              width={200}
              alt="画像"
            />
          </div>
        </div>
        <div className="text-2xl font-semibold mt-4">橋本拓海</div>
        <div className="text-lg mb-4">宇都宮大学工学部情報電子オプティクスコース</div>
        <div className="text-lg">
          趣味: ソフトテニス(10年), コナン, サウナ, プロ野球
        </div>
        <div className="mt-4">
          <IconIntroduction />
        </div>
        <div className="mt-4">
          <PageLink />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
