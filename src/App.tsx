import React from "react";
import { TopNav } from "./components/Navigation/TopNav";
import { SecondaryNav } from "./components/Navigation/SecondaryNav";
import { StatsCard } from "./components/Dashboard/StatsCard";
import { TasksSection } from "./components/Dashboard/TasksSection";
import { FeedsSection } from "./components/Dashboard/FeedsSection";
import { TrendingUp, Phone, Wrench, DollarSign } from "lucide-react";
export function App() {
  return <div className="min-h-screen bg-gray-100">
      <TopNav />
      <SecondaryNav />
      <main className="p-6">
        <div className="mb-4">
          <div className="text-sm text-gray-600">
            <span className="hover:text-gray-800 cursor-pointer">Home</span>
            <span className="mx-2">›</span>
            <span>1Leg Inc</span>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <StatsCard title="TODAY'S AVG SALE" value="$0.00" subtitle="GROSS SALES / # SALES" icon={<TrendingUp />} />
          <StatsCard title="MTD SALES VOLUME" value="$0" subtitle="GROSS SALES" icon={<TrendingUp />} />
          <StatsCard title="NUMBER OF SALES TODAY" value="0" subtitle="GROSS SALES" icon={<TrendingUp />} />
          <StatsCard title="# CALLS MADE TODAY" value="#0" icon={<Phone />} />
          <StatsCard title="YESTERDAY'S SALES VOLUME" value="$0" icon={<TrendingUp />} />
          <StatsCard title="TODAY'S SALES VOLUME" value="$0" subtitle="GROSS SALES" icon={<TrendingUp />} />
          <StatsCard title="# OPEN SERVICE TICKETS" value="#1" icon={<Wrench />} />
          <StatsCard title="NUMBER OF SALES YESTERDAY" value="0" icon={<TrendingUp />} />
          <StatsCard title="# LEADS RECEIVED THIS MONTH" value="0" icon={<DollarSign />} />
          <StatsCard title="# LEADS RECEIVED THIS WEEK" value="#0" icon={<DollarSign />} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <TasksSection />
          <FeedsSection />
        </div>
      </main>
    </div>;
}