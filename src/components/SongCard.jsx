import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song, i, isPlaying, activeSong, data }) => {
  const dispatch = useDispatch();

  function handlePauseClick() {
    dispatch(playPause(false));
  }

  function handlePlayClick() {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  function pP() {
    isPlaying && activeSong?.title === song.title
      ? handlePauseClick()
      : handlePlayClick();
  }

  return (
    <div className="flex flex-col w-[10rem] lg:w-[11.25rem] p-3 bg-transparent border-solid border-[1px] border-neutral-700 backdrop-blur-sm animate-slideup rounded-2xl cursor-pointer hover:bg-neutral-800">
      <div className="relative w-full h-full group" onClick={() => pP()}>
        <div
          className={`absolute inset-0 justify-center rounded-md items-center bg-neutral-900 bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-neutral-900 bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img
          src={song.images?.coverart}
          alt="song-cover"
          className="rounded-md"
        />
      </div>

      <div className="mt-4 mb-2 ml-1 flex flex-col">
        <p className="font-semibold text-md text-white truncate ">
          <Link to={`/musict/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-gray-400 truncate text-xs mt-1">
          <Link
            to={
              song.artists
                ? `/musict/artists/${song?.artists[0]?.adamid}`
                : "/musict/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
