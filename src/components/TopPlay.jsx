import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";

function TopChartCard({
  song,
  i,
  pP,
  activeSong,
  isPlaying,
  handlePauseClick,
  handlePlayClick,
}) {
  return (
    <div className="w-full flex flex-row items-center hover:bg-[#424242] p-2 rounded-2xl cursor-pointer mb-2 justify-between">
      <div className="felx-1 flex flex-row justify-between items-center gap-2">
        <img
          src={song?.images?.coverart}
          alt="cover"
          className="rounded-xl w-12 h-12"
        />
        <div className="flex-1 flex flex-col justify-center mx-3 ">
          <Link to={`/musict/songs/${song.key}`}>
            <p className="text-white font-bold">{song?.title}</p>
          </Link>
          <Link to={`/musict/artists/${song?.artists[0].adamid}`}>
            <p className="text-gray-500 text-sm font-bold mt-1">
              {song?.subtitle}
            </p>
          </Link>
        </div>
      </div>
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    </div>
  );
}

function TopPlay() {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);
  const topPlays = data?.slice(0, 5);
  const topArtists = data?.slice(0, 15);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  function handlePauseClick() {
    dispatch(playPause(false));
  }

  function handlePlayClick(song, i) {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  }

  function pP(song) {
    isPlaying && activeSong?.title === song.title
      ? handlePauseClick()
      : handlePlayClick();
  }

  return (
    <div
      ref={divRef}
      className=" ml-0 mb-0 flex-1 xl:max-w-[420px] lg:mb-[10rem] max-w-full flex flex-col topPlay hide-scrollbar"
    >
      <div className="w-full flex flex-col border-[1px] border-solid border-neutral-700 p-6 rounded-2xl pl-4">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-xl ml-2">Top Charts</h2>
          <Link to="/musict/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See More</p>
          </Link>
        </div>

        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              song={song}
              i={i}
              key={song.key}
              isPlaying={isPlaying}
              activeSong={activeSong}
              pP={pP}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col mt-8 mb-8 border-[1px] border-solid border-neutral-700 p-6 rounded-2xl">
        <div>
          <div className="flex flex-row justify-between items-center -mt-1">
            <h2 className="text-white font-bold text-xl">Top Artists</h2>
            <Link to="/musict/top-artists">
              <p className="text-gray-300 text-base cursor-pointer">See More</p>
            </Link>
          </div>
          <Swiper
            slidesPerView="auto"
            spaceBetween={20}
            freeMode
            centeredSlides
            centeredSlidesBounds
            modules={[FreeMode]}
            className="mt-4"
          >
            {topArtists?.map((song, i) => (
              <SwiperSlide
                key={song?.key}
                style={{ width: "16%", height: "auto" }}
                className="shadow-lg rounded-full animate-slideright"
              >
                <Link to={`/musict/artists/${song?.artists[0].adamid}`}>
                  <img
                    src={song?.images.background}
                    alt="artist"
                    className="rounded-full w-full object-cover"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default TopPlay;
