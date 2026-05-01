import React, { useState } from 'react';
import { 
  Home, 
  ClipboardList, 
  Map, 
  MessageCircle, 
  TrendingUp, 
  User, 
  LogIn 
} from 'lucide-react';

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

const dockItems: DockItem[] = [
  { id: 'home', icon: <Home size={22} />, label: 'Home' },
  { id: 'assessment', icon: <ClipboardList size={22} />, label: 'Assessment' },
  { id: 'roadmap', icon: <Map size={22} />, label: 'Roadmap' },
  { id: 'chat', icon: <MessageCircle size={22} />, label: 'AI Mentor' },
  { id: 'progress', icon: <TrendingUp size={22} />, label: 'Progress' },
  { id: 'profile', icon: <User size={22} />, label: 'Profile' },
  { id: 'signin', icon: <LogIn size={22} />, label: 'Sign In' },
];

const FloatingDock: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="relative">
        {/* Main Dock */}
        <div className={`
          flex items-end gap-2 px-8 py-3
          rounded-3xl
          bg-white/10 dark:bg-black/40 
          backdrop-blur-2xl
          border border-white/20 dark:border-white/10
          shadow-2xl shadow-black/30
          transition-all duration-500
          ${hoveredItem ? 'scale-[1.03]' : ''}
        `}>
          {dockItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`
                  flex items-center justify-center w-14 h-14 rounded-2xl
                  bg-white/10 dark:bg-white/5
                  border border-white/10 dark:border-white/5
                  transition-all duration-300 cursor-pointer
                  ${hoveredItem === item.id 
                    ? 'scale-125 -translate-y-3 bg-white/20 dark:bg-white/10 shadow-xl shadow-white/20' 
                    : 'hover:scale-110 hover:-translate-y-1'
                  }
                `}
                onClick={item.onClick}
              >
                <div className={`text-white transition-all duration-300 ${hoveredItem === item.id ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>
              </div>

              {/* Tooltip */}
              <div className={`
                absolute -top-12 left-1/2 -translate-x-1/2
                px-4 py-1.5 rounded-xl text-sm
                bg-zinc-900/90 dark:bg-black/80 backdrop-blur
                text-white whitespace-nowrap
                border border-white/10
                transition-all duration-200 pointer-events-none
                ${hoveredItem === item.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
              `}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reflection Effect */}
        <div className="absolute top-full left-0 right-0 h-12 pointer-events-none">
          <div className={`
            flex items-center justify-center gap-2 px-8 py-3
            rounded-3xl
            bg-white/5 dark:bg-white/5
            backdrop-blur-xl
            border border-white/5
            opacity-40
            scale-y-[-0.6]
            blur-[1px]
          `}>
            {dockItems.map((item, index) => (
              <div key={`ref-${index}`} className="w-10 h-10 flex items-center justify-center">
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingDock;
