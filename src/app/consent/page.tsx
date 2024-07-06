'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ChatPage from '@/components/ChatPage';

export default function Consent() {
  const [showChat, setShowChat] = useState(false);

  const consentMessages = [
    "Consent is important for the following reasons:\n- • It ensures your privacy and data protection\n- • It allows us to provide personalized financial advice\n- • It complies with financial regulations",
    "We will be accessing the following financial data:\n- • Your investment portfolio\n- • Your bank account transactions\n- • Your credit score",
    "Do you have any questions about consent or data access?"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Consent</h1>
      <p className="mb-4 text-center">
        We need your consent to proceed with the wealth management services.
      </p>
      <Button onClick={() => setShowChat(true)} className="mb-4">
        Learn why consent is important
      </Button>
      <Link href="/portfolio">
        <Button>I Agree</Button>
      </Link>
      {showChat && (
        <ChatPage 
          initialMessages={consentMessages} 
          onClose={() => setShowChat(false)} 
        />
      )}
    </div>
  );
}