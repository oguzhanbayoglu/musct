import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios
      .get(
        "https://geo.ipify.org/api/v2/country?apiKey=at_NgJPY2GqhbMAHAXB5PzcSsuAfSm9d"
      )
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  console.log(country);

  if (isFetching && loading) return <Loader title="Loading songs around you" />;
  if (error && country) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-2xl text-white text-left mt-4 mb-10 flex items-center ">
        Around You
        <span className="lg:pr-8 text-gray-400 text-lg ml-3">- {country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-4">
        {data?.map(
          (song, i) =>
            song.images?.coverart && (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
              />
            )
        )}
      </div>
    </div>
  );
};

export default AroundYou;
