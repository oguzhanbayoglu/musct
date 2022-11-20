import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({
  song,
  activeSong,
  isPlaying,
  handlePlay,
  handlePause,
}) => {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={24} className="text-gray-300" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={24} className="text-gray-300" onClick={handlePlay} />
  );
};

export default PlayPause;
