import Introduction from '@/components/Introduction';
import Link from 'next/link';


export default function Home() {
  const fadeIn = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return (
    <div>
      <Introduction />
    </div>
  );
}


