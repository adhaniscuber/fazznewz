import React from "react";
import dynamic from "next/dynamic";
import { LoggedInContent } from "@components/organisms";

const Navbar = dynamic(() => import("@components/molecules/navbar"));
const Tabs = dynamic(() => import("@components/molecules/tabs"));

const TopHeadlinesNews = dynamic(() =>
  import("@components/organisms/top-headlines-news"),
);
const FintechNews = dynamic(() => import("@components/organisms/fintech-news"));
const CustomsNews = dynamic(() => import("@components/organisms/custom-news"));

const Home = () => {
  return (
    <LoggedInContent>
      <div className="app">
        <div className="container">
          <Navbar />
          <Tabs />
          <div className="main">
            <TopHeadlinesNews title="Top Headline" />
            <FintechNews title="Fintech" />
            <CustomsNews />
          </div>
        </div>
      </div>
    </LoggedInContent>
  );
};

export default Home;
