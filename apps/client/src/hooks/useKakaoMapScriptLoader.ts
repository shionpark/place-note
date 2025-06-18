import { useState } from "react";
import { KAKAO_API_BASE_URL } from "@/constants/urls";

export const useKakaoMapScriptLoader = () => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  const addParams = new URLSearchParams({
    appkey: process.env.NEXT_PUBLIC_KAKAO_KEY || "",
    autoload: "false",
    libraries: "services",
  }).toString();
  const kakaoMapUrl = `${KAKAO_API_BASE_URL}?${addParams}`;

  const onLoadSuccess = () => setSdkLoaded(true);
  const onLoadFail = () => console.error("❌ Kakao SDK 로드 실패");

  return {
    sdkLoaded,
    kakaoMapUrl,
    onLoadSuccess,
    onLoadFail,
  };
};
