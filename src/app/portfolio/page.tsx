"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import PortfolioGraph from '@/components/PortfolioGraph';
import GenAIDialog from '@/components/GenAIDialog';

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Consolidated Portfolio View</h1>
      <PortfolioGraph />
      <div className="mt-4 space-y-2">
        <GenAIDialog
          triggerText="Optimize Portfolio"
          title="Portfolio Optimization"
          content="Our AI can analyze your portfolio and suggest optimizations based on your risk profile and market conditions."
        />
        <GenAIDialog
          triggerText="Benefits of using this app"
          title="App Benefits"
          content="This app provides personalized wealth management, AI-driven insights, and a comprehensive view of your financial portfolio."
        />
        <GenAIDialog
          triggerText="Fees and charges"
          title="Fees and Charges"
          content="We offer competitive rates tailored to your portfolio size. Contact our support team for a personalized quote."
        />
        <GenAIDialog
          triggerText="Why this app is better"
          title="App Advantages"
          content="Our app combines cutting-edge AI technology with comprehensive financial tools to provide a unique, personalized wealth management experience."
        />
      </div>
      <Link href="/risk-profiling" className="mt-4">
        <Button>Continue to Risk Profiling</Button>
      </Link>
    </div>
  );
}