import loader1 from "../assets/loader1.svg";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader1} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className="font-bold text-lg mt-1 ml-[-3rem] text-white">
      {title || "Loading"}
    </h1>
  </div>
);

export default Loader;
