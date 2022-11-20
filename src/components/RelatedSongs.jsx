import SongBar from "./SongBar";

function RelatedSongs({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
  pP,
}) {
  return (
    <div className="flex flex-col lg:pr-8">
      <h1 className="text-white text-2xl font-bold">Related Songs:</h1>
      <div className="mt-6 flex flex-col w-full">
        {data?.map((song, i) => (
          <SongBar
            key={`${song?.key}-${artistId}`}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            artistId={artistId}
            pP={pP}
          />
        ))}
      </div>
    </div>
  );
}

export default RelatedSongs;
