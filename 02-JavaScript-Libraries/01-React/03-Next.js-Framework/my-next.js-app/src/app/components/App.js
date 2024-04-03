import Image from "next/image";
import About from "./common/About/page.js";
import Header from "./common/Header/Header";
import NextJsCards from "./Cards/NextJsCards/NextJsCards";
import BlogCard from "./Cards/BlogCards/BlogCard";
import ConferenceSpeakersCards from "./Cards/ConferenceSpeakersCards/ConferenceSpeakersCards";

const App = () => {
  return (
    <>
      <ConferenceSpeakersCards />
      <BlogCard />
    </>
  );
};

export default App;
