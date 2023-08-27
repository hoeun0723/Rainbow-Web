"use client";

import React from "react";
import Calendar from "../components/calender";
// import Onboarding from "./onboarding/page";
// import Start from "./member/kakao/Start";

function Home() {
  return (
    <div className="flex justify-center items-center">
      {/* <Start /> */}
      {/* <Onboarding /> */}
      <Calendar />
    </div>
  );
}

export default Home;
