import React from "react";
import { Users, DollarSign, Phone, Settings, Shield, BarChart, PieChart, FileText } from "lucide-react";
export const SecondaryNav = () => {
  return <nav className="bg-[#2f3640] text-white py-2 px-4">
      <ul className="flex items-center gap-6">
        <NavItem icon={<Users size={18} />} text="Prospects" />
        <NavItem icon={<DollarSign size={18} />} text="Sales" />
        <NavItem icon={<Phone size={18} />} text="Call Center" />
        <NavItem icon={<BarChart size={18} />} text="Production" />
        <NavItem icon={<PieChart size={18} />} text="Marketing" />
        <NavItem icon={<FileText size={18} />} text="Reports" />
        <NavItem icon={<Settings size={18} />} text="Setup" />
        <NavItem icon={<Shield size={18} />} text="Security" />
        <NavItem text="CanvassMaster" />
      </ul>
    </nav>;
};
const NavItem = ({
  icon,
  text
}: {
  icon?: React.ReactNode;
  text: string;
}) => <li className="flex items-center gap-2 text-sm cursor-pointer hover:opacity-80">
    {icon}
    <span>{text}</span>
  </li>;