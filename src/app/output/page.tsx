"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import OutputSummary from '@/components/OutputSummary';

export default function Output() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Your Financial Summary</h1>
      <OutputSummary />
      <Link href="/transaction" className="mt-4">
        <Button>Execute Plan</Button>
      </Link>
    </div>
  );
}