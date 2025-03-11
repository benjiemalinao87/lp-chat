import { FC } from 'react';
import { 
  Search, Grid, ArrowLeft, Calendar, Wrench, FileText, DollarSign, 
  Clock, Database, List, Zap, BarChart2, Eye, ArrowRight, Briefcase, 
  Phone, PhoneCall, Users, CalendarDays, FileCheck, Target, ListOrdered,
  Settings, Mail, Map, Timer, BarChart, Import, Palette
} from 'lucide-react';

interface NavDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'Production' | 'Prospects' | 'Sales' | 'Call Center' | 'Marketing';
}

export const NavDropdown: FC<NavDropdownProps> = ({ isOpen, type }) => {
  const productionItems = [
    { icon: <Search className="w-5 h-5" />, label: 'Job Search' },
    { icon: <Grid className="w-5 h-5" />, label: 'Milestone Grid' },
    { icon: <ArrowLeft className="w-5 h-5" />, label: 'Last' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Production Calendar' },
    { icon: <Wrench className="w-5 h-5" />, label: 'Service Calendar' },
    { icon: <FileText className="w-5 h-5" />, label: 'Document Manager' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Accounting' },
    { icon: <Clock className="w-5 h-5" />, label: 'Balances Due' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Scheduling' },
    { icon: <Database className="w-5 h-5" />, label: 'S3 Browser' },
    { icon: <FileText className="w-5 h-5" />, label: 'Images to Process' }
  ];

  const prospectsItems = [
    { icon: <Search className="w-5 h-5" />, label: 'Search' },
    { icon: <ArrowLeft className="w-5 h-5" />, label: 'Last' },
    { icon: <List className="w-5 h-5" />, label: 'To Do List' },
    { icon: <Zap className="w-5 h-5" />, label: 'Fast Entry' },
    { icon: <Search className="w-5 h-5" />, label: 'Cold Call Search' }
  ];

  const salesItems = [
    { icon: <Calendar className="w-5 h-5" />, label: 'Schedule' },
    { icon: <Target className="w-5 h-5" />, label: 'Assignment' },
    { icon: <FileText className="w-5 h-5" />, label: 'Presentation' },
    { icon: <ListOrdered className="w-5 h-5" />, label: 'Tracking Log' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Personal Calendar' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Sale Differences' }
  ];

  const callCenterItems = [
    { icon: <List className="w-5 h-5" />, label: 'Detail' },
    { icon: <BarChart2 className="w-5 h-5" />, label: 'Overview' },
    { icon: <Eye className="w-5 h-5" />, label: 'Issue' },
    { icon: <ArrowRight className="w-5 h-5" />, label: 'Forward Look' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Inbound Leads' },
    { icon: <Clock className="w-5 h-5" />, label: 'Dialing Results' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Pipeline' },
    { icon: <Phone className="w-5 h-5" />, label: 'Dial Control' },
    { icon: <Clock className="w-5 h-5" />, label: 'Hours Worked' },
    { icon: <PhoneCall className="w-5 h-5" />, label: 'Callbacks' },
    { icon: <CalendarDays className="w-5 h-5" />, label: 'Appt Calendar' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Appt Schedule' },
    { icon: <Users className="w-5 h-5" />, label: 'Cold Call Lists' },
    { icon: <FileCheck className="w-5 h-5" />, label: 'Confirmation Summary' },
    { icon: <Target className="w-5 h-5" />, label: 'Cold Call Targets' },
    { icon: <ListOrdered className="w-5 h-5" />, label: 'Inbound Queue List' }
  ];

  const marketingItems = [
    { icon: <Settings className="w-5 h-5" />, label: 'ValCodes' },
    { icon: <Map className="w-5 h-5" />, label: 'Maps' },
    { icon: <Settings className="w-5 h-5" />, label: 'Zipcode Mgmt' },
    { icon: <Timer className="w-5 h-5" />, label: 'Time Schedule' },
    { icon: <Import className="w-5 h-5" />, label: 'Import DNC List' },
    { icon: <Calendar className="w-5 h-5" />, label: 'Event Hours' },
    { icon: <BarChart className="w-5 h-5" />, label: 'Source Overview' },
    { icon: <Settings className="w-5 h-5" />, label: 'Source Specific' },
    { icon: <FileText className="w-5 h-5" />, label: 'Offers' },
    { icon: <List className="w-5 h-5" />, label: 'Lists' },
    { icon: <Palette className="w-5 h-5" />, label: 'Creatives' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Val Code Costs' },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Server' },
    { icon: <Mail className="w-5 h-5" />, label: 'Direct Mail' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Marketing Cost Categories' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Marketing Cost Detail' }
  ];

  const menuItems = {
    Production: productionItems,
    Prospects: prospectsItems,
    Sales: salesItems,
    'Call Center': callCenterItems,
    Marketing: marketingItems
  }[type];

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-[88px] w-64 bg-[#2f3640] text-white shadow-lg z-50">
      <div className="py-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 py-3 hover:bg-[#3f4854] cursor-pointer transition-colors"
          >
            <span className="text-[#64b5f6]">{item.icon}</span>
            <span className="text-sm">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
