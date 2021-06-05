import React, { useEffect } from "react";
import { Navbar } from "@components/molecules";
import {
  IndonesiaNews,
  TopHeadlinesNews,
  LoggedInContent,
} from "@components/organisms";

const Home = () => {
  return (
    <LoggedInContent>
      <div className="app">
        <div className="container">
          <Navbar />
          <div className="main">
            <TopHeadlinesNews title="Top Headline" />
            <IndonesiaNews title="Indonesia" />
            <IndonesiaNews title="Indonesia" />
          </div>
        </div>
      </div>
    </LoggedInContent>
  );
};

export default Home;
