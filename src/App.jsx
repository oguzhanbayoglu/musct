import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  //bg-gradient-to-br from-[#060606] to-[#1d2c37] pl-2

  return (
    <div className="relative flex bg-[#161616] ">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-[#161616]">
        <Searchbar />

        <div className="px-2 md:px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/musict" element={<Discover />} />
              <Route path="/musict/top-artists" element={<TopArtists />} />
              <Route path="/musict/top-charts" element={<TopCharts />} />
              <Route path="/musict/around-you" element={<AroundYou />} />
              <Route path="/musict/artists/:id" element={<ArtistDetails />} />
              <Route path="/musict/songs/:songid" element={<SongDetails />} />
              <Route path="/musict/search/:searchTerm" element={<Search />} />
            </Routes>
          </div>
          <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
        </div>
      </div>

      {activeSong?.title && (
        <div className="absolute h-28 bottom-0 left-0 right-0 border-[1px] border-solid border-neutral-600 p-4 flex animate-slideup bg-gradient-to-br from-[#11111121] to-[#191919d9] backdrop-blur-3xl backdrop-saturate-[400%] rounded-3xl z-10 m-6">
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
