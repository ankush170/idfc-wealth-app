"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import GenAIDialog from '@/components/GenAIDialog';

export default function Consent() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Consent</h1>
      <p className="mb-4 text-center">
        We need your consent to proceed with the wealth management services.
      </p>
      <GenAIDialog
        triggerText="Learn why consent is important"
        title="Importance of Consent"
        content="Consent is crucial for protecting your privacy and ensuring transparent use of your financial data."
      />
      <Link href="/portfolio" className="mt-4">
        <Button>I Agree</Button>
      </Link>
    </div>
  );
}