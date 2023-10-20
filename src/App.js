import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBg from "../src/assets/video.mp4";
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      <div className="overlay"></div>
      <video src={VideoBg} autoPlay loop muted></video>
      <div className="page__content">
        <h1>Launching Soon</h1>
        <h3>
          Leave your email and we'll let you know once the site goes live.
        </h3>
        <FlipClockCountdown
          to={new Date().getTime() + 600 * 3600 * 1000 + 5000}
          className="fliq-clock"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />

        <button className="btn">Notify Me</button>
      </div>
    </section>
  );
};

export default App;
