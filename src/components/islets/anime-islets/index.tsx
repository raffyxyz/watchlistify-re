import React from "react";
import AnimePlayer from "./anime-player";
import AnimeDetails from "./anime-details";

interface AnimeWrapperProps {
  children: React.ReactNode;
}

const AnimeWrapper: React.FC<AnimeWrapperProps> = ({ children }) => {
  return (
    <div className="mt-4 w-[1200px] m-auto">
      <div className="grid grid-cols-3 gap-4">{children}</div>
    </div>
  );
};

export { AnimeWrapper, AnimePlayer, AnimeDetails };