import { createContext, useContext, useState } from 'react';

const VideoModalContext = createContext();

export function VideoModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <VideoModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      {children}
    </VideoModalContext.Provider>
  );
}

export function useVideoModal() {
  const context = useContext(VideoModalContext);
  if (!context) {
    throw new Error('useVideoModal must be used within a VideoModalProvider');
  }
  return context;
}