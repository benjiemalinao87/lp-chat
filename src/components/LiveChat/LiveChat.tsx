import React, { useState } from "react";
import { Search, ChevronDown, Filter, Smile, Paperclip, Send, MoreVertical, ExternalLink, Headphones, Calendar, Mail, Phone } from "lucide-react";
const CONTACTS = [{
  id: 1,
  name: "Sarah Johnson",
  avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=random",
  status: "Active",
  lastMessage: "I'll check the pricing and get back to you",
  timestamp: "2 min ago",
  department: "Sales",
  email: "sarah.j@example.com",
  phone: "+1234567890",
  messages: [{
    id: 1,
    text: "Hi, I'm interested in your windows",
    sender: "user",
    time: "10:30 AM"
  }, {
    id: 2,
    text: "I'll check the pricing and get back to you",
    sender: "agent",
    time: "10:32 AM"
  }]
}, {
  id: 2,
  name: "Michael Chen",
  avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=random",
  status: "Away",
  lastMessage: "When can we schedule the installation?",
  timestamp: "25 min ago",
  department: "Installation",
  email: "m.chen@example.com",
  phone: "+1234567891",
  messages: [{
    id: 1,
    text: "When can we schedule the installation?",
    sender: "user",
    time: "9:45 AM"
  }]
}, {
  id: 3,
  name: "Emma Wilson",
  avatar: "https://ui-avatars.com/api/?name=Emma+Wilson&background=random",
  status: "Active",
  lastMessage: "Thanks for the quick response!",
  timestamp: "1 hour ago",
  department: "Support",
  email: "emma.w@example.com",
  phone: "+1234567892",
  messages: [{
    id: 1,
    text: "I need help with my recent order",
    sender: "user",
    time: "8:15 AM"
  }, {
    id: 2,
    text: "I can help you with that. What's the order number?",
    sender: "agent",
    time: "8:17 AM"
  }, {
    id: 3,
    text: "Thanks for the quick response!",
    sender: "user",
    time: "8:20 AM"
  }]
}, {
  id: 4,
  name: "David Kim",
  avatar: "https://ui-avatars.com/api/?name=David+Kim&background=random",
  status: "Offline",
  lastMessage: "Perfect, that works for me",
  timestamp: "2 hours ago",
  department: "Sales",
  email: "david.k@example.com",
  phone: "+1234567893",
  messages: [{
    id: 1,
    text: "What are your business hours?",
    sender: "user",
    time: "Yesterday"
  }, {
    id: 2,
    text: "We're open 9 AM to 6 PM Monday to Friday",
    sender: "agent",
    time: "Yesterday"
  }, {
    id: 3,
    text: "Perfect, that works for me",
    sender: "user",
    time: "Yesterday"
  }]
}, {
  id: 5,
  name: "Lisa Martinez",
  avatar: "https://ui-avatars.com/api/?name=Lisa+Martinez&background=random",
  status: "Active",
  lastMessage: "Could you send me the catalog?",
  timestamp: "3 hours ago",
  department: "Marketing",
  email: "lisa.m@example.com",
  phone: "+1234567894",
  messages: [{
    id: 1,
    text: "Could you send me the catalog?",
    sender: "user",
    time: "7:30 AM"
  }]
}];
const ChatContact = ({
  contact,
  isSelected,
  onClick
}) => <div className={`p-4 border-b hover:bg-gray-50 cursor-pointer ${isSelected ? "bg-gray-50" : ""}`} onClick={onClick}>
    <div className="flex items-center gap-3">
      <div className="relative">
        <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
          ${contact.status === "Active" ? "bg-green-500" : contact.status === "Away" ? "bg-yellow-500" : "bg-gray-500"}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start">
          <h3 className="font-medium truncate">{contact.name}</h3>
          <span className="text-xs text-gray-500">{contact.timestamp}</span>
        </div>
        <p className="text-sm text-gray-500 truncate">{contact.lastMessage}</p>
      </div>
    </div>
  </div>;
export const LiveChat = () => {
  const [selectedContact, setSelectedContact] = useState(CONTACTS[0]);
  return <div className="fixed inset-0 bg-white z-40 flex flex-col mt-[84px]">
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-72 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <button className="flex items-center gap-2">
                <span>Open</span>
                <ChevronDown size={16} />
              </button>
              <button className="flex items-center gap-2">
                <span>All</span>
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 border rounded-md text-sm" />
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
          <div className="overflow-auto flex-1">
            {CONTACTS.map(contact => <ChatContact key={contact.id} contact={contact} isSelected={selectedContact.id === contact.id} onClick={() => setSelectedContact(contact)} />)}
          </div>
        </div>
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img src={selectedContact.avatar} alt={selectedContact.name} className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-medium">{selectedContact.name}</div>
                <div className="text-sm text-gray-500">
                  {selectedContact.status}
                </div>
              </div>
            </div>
            <button className="px-4 py-1.5 bg-green-500 text-white rounded-md text-sm">
              Move to Done
            </button>
          </div>
          <div className="flex-1 overflow-auto p-4">
            {selectedContact.messages.map(message => <div key={message.id} className={`flex mb-4 ${message.sender === "user" ? "justify-end" : ""}`}>
                <div className={`max-w-[70%] ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100"} rounded-lg p-3`}>
                  <p>{message.text}</p>
                  <div className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500"}`}>
                    {message.time}
                  </div>
                </div>
              </div>)}
          </div>
          <div className="p-4 border-t">
            <div className="flex items-center gap-2 bg-white border rounded-lg p-2">
              <input type="text" placeholder="Type message here, type / to use shortcuts, Ctrl + Enter to add new line" className="flex-1 outline-none text-sm" />
              <button className="p-2 hover:bg-gray-100 rounded">
                <Smile size={20} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Paperclip size={20} className="text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded">
                <Send size={20} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <div className="w-80 border-l">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="font-medium">Details</h2>
            <MoreVertical size={20} className="text-gray-500" />
          </div>
          <div className="p-4">
            <div className="flex items-center gap-4 mb-6">
              <img src={selectedContact.avatar} alt={selectedContact.name} className="w-16 h-16 rounded-full" />
              <div>
                <div className="font-medium">{selectedContact.name}</div>
                <div className="text-sm text-gray-500">Customer</div>
              </div>
            </div>
            <div className="space-y-4">
              <InfoItem icon={<ExternalLink size={16} />} label="Department" value={selectedContact.department} />
              <InfoItem icon={<Calendar size={16} />} label="Last Active" value={selectedContact.timestamp} />
              <InfoItem icon={<Mail size={16} />} label="Email" value={selectedContact.email} />
              <InfoItem icon={<Phone size={16} />} label="Phone" value={selectedContact.phone} />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const InfoItem = ({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => <div className="flex items-center gap-2">
    <div className="text-gray-400">{icon}</div>
    <div className="flex-1">
      <div className="text-sm text-gray-500">{label}</div>
      <div className="text-sm">{value}</div>
    </div>
  </div>;