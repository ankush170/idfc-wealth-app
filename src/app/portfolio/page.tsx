'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PortfolioGraph from '@/components/PortfolioGraph';
import ChatPage from '@/components/ChatPage';

export default function Portfolio() {
  const [showChat, setShowChat] = useState(false);

  const portfolioMessages = [
    "Benefits of using this app:\n- • Personalized investment advice\n- • Real-time portfolio tracking\n- • AI-driven market insights",
    "Our fee structure:\n- • We charge a small percentage of assets under management\n- • Exact fees depend on your portfolio size\n- • No hidden charges or commissions",
    "Why our app is better:\n- • Cutting-edge AI technology\n- • Comprehensive financial planning tools\n- • User-friendly interface\n- • Cutting-edge AI technology\n- • Comprehensive financial planning tools\n- • User-friendly interface",
    "Do you have any questions about our services or fees?"
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Consolidated Portfolio View</h1>
      <PortfolioGraph />
      <Button onClick={() => setShowChat(true)} className="mt-4">
        Optimize Portfolio
      </Button>
      <Link href="/risk-profiling" className="mt-4">
        <Button>Continue to Risk Profiling</Button>
      </Link>
      {showChat && (
        <ChatPage 
          initialMessages={portfolioMessages} 
          onClose={() => setShowChat(false)} 
        />
      )}
    </div>
  );
}