import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Introducing the all new wealth specialist
      </h1>
      <p className="text-xl mb-8 text-center">
        Fulfill your goals and dreams
      </p>
      <Link href="/consent">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
}