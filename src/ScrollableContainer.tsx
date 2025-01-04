

import { ReactNode } from 'react';

const ScrollableContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen overflow-y-auto
      scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400/40
      hover:scrollbar-thumb-gray-500/50
      scrollbar-thumb-rounded-full
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:bg-transparent
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-400/40
      [&::-webkit-scrollbar-thumb:hover]:bg-gray-500/50
      [&::-webkit-scrollbar-button]:hidden">
      {children}
    </div>
  );
};

export default ScrollableContainer;