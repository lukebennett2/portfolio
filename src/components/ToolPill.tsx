import { ReactNode, useState } from 'react';

interface ToolPillProps {
  name: string;
  icon: ReactNode;
  tooltip: string;
  color: string;
}

const ToolPill = ({ name, icon, tooltip, color }: ToolPillProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`inline-flex items-center px-3 py-1 ${color} text-sm rounded-full border border-black/5 shadow-sm hover:shadow-md transition`}
      >
        {icon}
        {name}
      </div>
      {hovered && (
        <div className="absolute z-10 top-full mt-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded-md px-2 py-1 shadow-lg whitespace-nowrap">
          {tooltip}
        </div>
      )}
    </div>
  );
};

export default ToolPill;
