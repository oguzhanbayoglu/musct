import { Link } from "react-router-dom";

function DetailsHeader({ artistId, artistData, songData }) {
  const artist = artistData?.data.views;
  console.log(artist);
  return (
    <div className="relative w-full flex flex-col my-8">
      <div className=" inset-0 flex items-center">
        <img
          className="w-24 rounded-full object-cover "
          src={
            artistId
              ? artist?.artwork?.url.replace("{w}", "500").replace("{h}", "500")
              : songData?.images?.coverart
          }
          alt=""
        />
        <div className="ml-5">
          <p className="text-gray-300 font-bold text-2xl">
            {artistId ? artist?.name : songData?.title}
          </p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-gray-300 font-light text-md">
                {songData?.subtitle}
              </p>
            </Link>
          )}
          <p className="text-gray-400 font-light text-sm">
            {artistId ? artist?.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsHeader;
