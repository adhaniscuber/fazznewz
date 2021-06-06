import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar, Tabs } from "@components/molecules";
import { LoggedInContent } from "@components/organisms";

const TopHeadlinesNews = dynamic(() =>
  import("@components/organisms/top-headlines-news"),
);
const FintechNews = dynamic(() => import("@components/organisms/fintech-news"));
const CustomsNews = dynamic(() => import("@components/organisms/custom-news"));

const Home = () => {
  const [tabActive, setTabActive] = useState("Headline");

  return (
    <LoggedInContent>
      <div className="app">
        <div className="container">
          <Navbar />
          <Tabs onSelected={setTabActive} />
          <div className="main">
            <TopHeadlinesNews
              title="Top Headline"
              active={tabActive === "Headline"}
            />
            <FintechNews title="Fintech" active={tabActive === "Fintech"} />
            <CustomsNews active={tabActive === "Custom"} />
          </div>
        </div>
      </div>
    </LoggedInContent>
  );
};

export default Home;
