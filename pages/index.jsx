import React from "react";
import dynamic from "next/dynamic";
import { Navbar, Tabs } from "@components/molecules";
import { LoggedInContent } from "@components/organisms";

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
