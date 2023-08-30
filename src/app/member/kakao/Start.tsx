"use client";

import { Intro } from "@/public/assets/motions";
import { KAKAO_URL } from "@/src/constant/api.constant";
import LottieAnimation from "@/src/hooks/LottieAnimation";

function Start() {
  return (
    <div className="w-343 flex flex-col justify-center">
      <div className="flex flex-col items-center pt-20 pb-10">
        <div className="sb-25-600 text-gray-700">안녕하세요 </div>
        <div className="sb-25-600 text-gray-700"> 바이바이 입니다</div>
      </div>
      <LottieAnimation animation={Intro} />
      <div className="bg-gray-500 py-5 text-white">
        <a href={KAKAO_URL} className="flex justify-center items-center text-white r-18-600 w-full">
          카카오 계정으로 시작하기
        </a>
      </div>
    </div>
  );
}

export default Start;
