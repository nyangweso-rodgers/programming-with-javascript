import Image from "next/image";
import About from "./common/About/page.js";
import Header from "./common/Header/Header";
import NextJsCards from "./Cards/NextJsCards/NextJsCards";

import ConferenceSpeakersCards from "./Cards/ConferenceSpeakersCards/ConferenceSpeakersCards";
import CenterAlignedCards from "./Cards/BlogCards/CenterAlignedBlogCards/CenterAlignedCards";
import LeftAlignBlogCards from "./Cards/BlogCards/LeftAlignBlogCards/LeftAlignBlogCards";

const App = () => {
  return (
    <>
      <ConferenceSpeakersCards />
      <CenterAlignedCards />
      <LeftAlignBlogCards />
    </>
  );
};

export default App;
