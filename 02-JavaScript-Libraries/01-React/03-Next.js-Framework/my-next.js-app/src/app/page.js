import Image from "next/image";
import styles from "./page.module.css";
import About from "./components/common/About/page.js";
import Header from "./components/common/Header/Header";
import MyCard from "./components/Cards/MyCard";

export default function Home() {
  return (
    <main>
      <About />
      <Header />
      <MyCard />
    </main>
  );
}
