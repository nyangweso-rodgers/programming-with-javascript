// import bootstrap to pages.js
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import styles from "./page.module.css";
import About from "./components/common/About/page.js";
import Header from "./components/common/Header/Header";
import NextJsCards from "./components/Cards/NextJsCards/NextJsCards";
import BlogCard from "./components/Cards/BlogCards/BlogCard";

export default function Home() {
  return (
    <main>
      <BlogCard />
    </main>
  );
}
