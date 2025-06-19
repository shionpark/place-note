import { useState } from "react";
import { KAKAO_API_BASE_URL } from "@/constants/urls";

export const useKakaoMapScriptLoader = () => {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  const setKakaoMapUrl = ({
    baseUrl,
    ...queryParams
  }: {
    baseUrl: string;
    appkey: string;
    autoload: "true" | "false";
    libraries: string;
  }) => {
    const param = new URLSearchParams(queryParams).toString();
    const url = `${baseUrl}?${param}`;
    return url;
  };

  const kakaoMapUrl = setKakaoMapUrl({
    baseUrl: KAKAO_API_BASE_URL,
    appkey: process.env.NEXT_PUBLIC_KAKAO_KEY || "",
    autoload: "false",
    libraries: "services",
  });

  const onLoad = () => setSdkLoaded(true);
  const onLoadFail = () => console.error("❌ Kakao SDK 로드 실패");

  return {
    sdkLoaded,
    kakaoMapUrl,
    onLoad,
    onLoadFail,
  };
};
