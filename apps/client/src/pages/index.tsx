
import AppBar from '@repo/ui/AppBar';

import dynamic from 'next/dynamic';

const GlobeComponent = dynamic(() => import('@repo/ui/GlobeComponent'), {
  ssr: false,
});

export default function Home() {
  return (
   <div>
    <AppBar />
    <GlobeComponent />
   </div>
  );
}
