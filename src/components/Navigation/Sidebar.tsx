import { FC } from 'react';

interface User {
  name: string;
  online?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const users: User[] = [
    { name: 'Benjie', online: true },
    { name: 'Vic', online: true },
    { name: 'Izzy', online: false },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Users</h2>
          <div className="space-y-2">
            {users.map((user, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    {user.name[0]}
                  </div>
                  <span>{user.name}</span>
                </div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    user.online ? 'bg-green-500' : 'bg-gray-400'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
