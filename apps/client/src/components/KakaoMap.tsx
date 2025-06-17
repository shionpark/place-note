"use client";

import Script from "next/script";
import { useEffect } from "react";
import { useGeoLocation, useKakaoMapLoader } from "@place-memo/api";
import { useKakaoMapScriptLoader } from "@/hooks/useKakaoMapScriptLoader";

export default function KakaoMap() {
  const { location } = useGeoLocation();
  const { mapContainer, onLoadKakaoAPI } = useKakaoMapLoader();
  const { sdkLoaded, kakaoMapUrl, onLoadSuccess, onLoadFail } =
    useKakaoMapScriptLoader();

  useEffect(() => {
    if (sdkLoaded && location?.latitude && location.longitude) {
      onLoadKakaoAPI({ lat: location.latitude, lng: location.longitude });
    }
  }, [sdkLoaded, location]);

  return (
    <>
      <Script
        strategy="lazyOnload"
        type="text/javascript"
        src={kakaoMapUrl}
        onLoad={onLoadSuccess}
        onError={onLoadFail}
      />
      <div ref={mapContainer} className="w-[60rem] h-[40rem]"></div>
    </>
  );
}
