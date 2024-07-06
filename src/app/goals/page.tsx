"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GoalsForm from '@/components/GoalsForm';

export default function Goals() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Financial Goals</h1>
      <GoalsForm />
      <Link href="/output" className="mt-4">
        <Button>Generate Recommendations</Button>
      </Link>
    </div>
  );
}