import { Metadata } from 'next';
import { Button } from '@ui/components/button';
import Navbar from '../components/pages/Navbar';



export const metadata: Metadata = {
  title: 'Web - Turborepo Example',
};

export default function Home() {
  return (
    <div className="flex min-h-screen bg-black flex-col items-center justify-center py-2">
      <main className="mx-auto w-auto px-4 pb-8 pt-16 sm:pt-24 lg:px-8">
       <Navbar/>
      </main>
    </div>
  );
}
