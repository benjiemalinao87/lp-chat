import React from "react";
interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
}
export const StatsCard = ({
  title,
  value,
  subtitle,
  icon
}: StatsCardProps) => {
  return <div className="bg-[#e8eef7] rounded-lg p-4 shadow">
      <h3 className="text-xs font-medium text-gray-600 mb-2">{title}</h3>
      <div className="flex items-start gap-2">
        {icon && <div className="text-gray-600">{icon}</div>}
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
      </div>
    </div>;
};