import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
import fullscreen from "../../assets/fullscreen.svg";
import FSPlayer from "../FSPlayer";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useFullscreen, useToggle } from "react-use";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => {
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player);

  const fsRef = useRef(null);
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });

  return (
    <div className="hidden lg:flex flex-1 items-center justify-end">
      {value <= 1 && value > 0.5 && (
        <BsFillVolumeUpFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(0)}
        />
      )}
      {value <= 0.5 && value > 0 && (
        <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
      )}
      {value === 0 && (
        <BsFillVolumeMuteFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(1)}
        />
      )}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="2xl:w-40 lg:w-32 md:w-32 h-1 ml-2"
      />
      <button onClick={toggle} className="ml-3 ">
        <img src={fullscreen} alt="right image" />
      </button>
      <div ref={fsRef}>
        {isFullscreen && (
          <FSPlayer
            toggle={toggle}
            activeSong={activeSong}
            isActive={isActive}
            isPlaying={isPlaying}
          />
        )}
      </div>
    </div>
  );
};

export default VolumeBar;
