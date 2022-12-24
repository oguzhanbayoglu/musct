import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails)
    return <Loader title="Loading artist details..." />;

  if (error) return <Error />;

  console.log(artistData);
  console.log(artistData.data[0].attributes);

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={artistId} artistData={artistData} />
      {isFetchingArtistDetails ? (
        <Loader />
      ) : (
        <div>
          <div className="flex flex-col items-center">
            <h4 className="text-white italic mb-12">
              More functions will be added to this page...
            </h4>
            <img
              src={artistData?.data[0]?.attributes?.artwork?.url}
              alt="artist"
              className="rounded-full h-48"
            />
            <div className="w-[42rem]">
              <h3 className="text-white font-bold text-3xl mb-4">
                {artistData?.data[0]?.attributes?.name}
              </h3>
              <p className="text-white line-clamp-6 mb-8">
                {artistData?.data[0]?.attributes?.artistBio}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtistDetails;

// <RelatedSongs
//   data={Object.values(artistData ? artistData?.data : "")}
//   artistId={artistId}
//   isPlaying={isPlaying}
//   activeSong={activeSong}
// />
