"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useGeoLocation, useKakaoMapLoader } from "@place-memo/api";
import { useKakaoMapScriptLoader } from "@/hooks/useKakaoMapScriptLoader";

export default function KakaoMap() {
  const { sdkLoaded, kakaoMapUrl, onLoad, onLoadFail } =
    useKakaoMapScriptLoader();
  const { mapObj, mapContainer, onLoadKakaoAPI, searchKeywords } =
    useKakaoMapLoader();

  const { location } = useGeoLocation();

  useEffect(() => {
    if (sdkLoaded && location) {
      onLoadKakaoAPI(location);
    }
  }, [sdkLoaded, location]);

  useEffect(() => {
    if (mapObj.current) {
      console.log("current!");
      searchKeywords(mapObj.current, "판교 치킨");
    }
  }, [mapObj.current]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={kakaoMapUrl}
        onLoad={onLoad}
        onError={onLoadFail}
      />
      <div ref={mapContainer} className="w-[60rem] h-[40rem]"></div>
    </>
  );
}
