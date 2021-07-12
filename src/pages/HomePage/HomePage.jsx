import React, { Profiler } from "react";
import { HomePageContainer } from "./HomePage.styles";
import Directory from "../../components/Directory/Directory";

const HomePage = () => (
  <HomePageContainer>
    <Profiler
      id="Directory"
      onRender={(id, phase, actualDuration) => {
        console.log({
          id,
          phase,
          actualDuration,
        });
      }}
    >
      <Directory />
    </Profiler>
  </HomePageContainer>
);

export default HomePage;
