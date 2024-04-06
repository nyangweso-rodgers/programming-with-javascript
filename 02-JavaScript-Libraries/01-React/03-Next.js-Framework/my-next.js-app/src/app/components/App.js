import Image from "next/image";
import About from "./common/About/page.js";
import Header from "./common/Header/Header";
import NextJsCards from "./Cards/NextJsCards/NextJsCards";

import ConferenceSpeakersCards from "./Cards/ConferenceSpeakersCards/ConferenceSpeakersCards";

import TextBlogCards from "./Cards/BlogCards/TextBlogCards/TextBlogCards.js";
import CenterAlignedCards from "./Cards/BlogCards/CenterAlignedBlogCards/CenterAlignedCards";
import LeftAlignBlogCards from "./Cards/BlogCards/LeftAlignBlogCards/LeftAlignBlogCards";

import TrainBookingForm from "./Forms/TrainBookingForm/TrainBookingForm.js";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <TextBlogCards />
      <Footer />
    </>
  );
};

export default App;
