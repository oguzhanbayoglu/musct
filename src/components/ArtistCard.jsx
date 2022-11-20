import React from "react";
import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const nav = useNavigate();
  console.log(track);
  return (
    <div
      onClick={() => nav(`/musict/artists/${track?.artists[0].adamid}`)}
      className="flex flex-col p-3 justify-center items-center border-[1px] border-solid border-neutral-700 animate-slideup rounded-2xl cursor-pointer hover:bg-neutral-800"
    >
      <img
        src={track?.images?.coverart}
        alt="artist"
        className="w-[10.2rem] h-[10.2rem] rounded-full object-cover mb-3"
      />
      <p className="text-white truncate w-32 text-center">{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;
