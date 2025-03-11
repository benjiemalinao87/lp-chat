import React, { useState, useEffect, useRef } from "react";
import { Users, DollarSign, Phone, Settings, Shield, BarChart, PieChart, FileText } from "lucide-react";
import { NavDropdown } from "./NavDropdown";

export const SecondaryNav = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setHoveredItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return <nav ref={navRef} className="bg-[#2f3640] text-white py-2 px-4 relative">
      <ul className="flex items-center gap-6">
        <NavItem 
          icon={<Users size={18} />} 
          text="Prospects" 
          onMouseEnter={() => setHoveredItem("Prospects")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          icon={<DollarSign size={18} />} 
          text="Sales" 
          onMouseEnter={() => setHoveredItem("Sales")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          icon={<Phone size={18} />} 
          text="Call Center" 
          onMouseEnter={() => setHoveredItem("Call Center")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          icon={<BarChart size={18} />} 
          text="Production" 
          onMouseEnter={() => setHoveredItem("Production")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          icon={<PieChart size={18} />} 
          text="Marketing" 
          onMouseEnter={() => setHoveredItem("Marketing")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          icon={<FileText size={18} />} 
          text="Reports" 
          onMouseEnter={() => setHoveredItem("Reports")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          icon={<Settings size={18} />} 
          text="Setup" 
          onMouseEnter={() => setHoveredItem("Setup")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          icon={<Shield size={18} />} 
          text="Security" 
          onMouseEnter={() => setHoveredItem("Security")}
          onMouseLeave={() => setHoveredItem(null)}
        />
        <NavItem 
          text="CanvassMaster" 
          onMouseEnter={() => setHoveredItem("CanvassMaster")}
          onMouseLeave={() => setHoveredItem(null)}
        />
      </ul>
      <NavDropdown 
        isOpen={hoveredItem === "Production" || hoveredItem === "Prospects" || 
               hoveredItem === "Sales" || hoveredItem === "Call Center" ||
               hoveredItem === "Marketing"} 
        onClose={() => setHoveredItem(null)}
        type={hoveredItem as "Production" | "Prospects" | "Sales" | "Call Center" | "Marketing"}
      />
    </nav>;
};

interface NavItemProps {
  icon?: React.ReactNode;
  text: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItem = ({ icon, text, onMouseEnter, onMouseLeave }: NavItemProps) => (
  <li 
    className="flex items-center gap-2 text-sm cursor-pointer hover:opacity-80" 
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {icon}
    <span>{text}</span>
  </li>
);