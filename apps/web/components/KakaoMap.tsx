"use client";

import Script from "next/script";
import { useKakaoMapLoader } from "../hooks/useKakaoMapLoader";
import { KAKAO_API_BASE_URL } from "@/constants/urls";
import { useGeoLocation } from "@/hooks/useGeolocation";
import { useEffect, useState } from "react";

export default function KakaoMap() {
  const { location } = useGeoLocation();
  const { mapContainer, onLoadKakaoAPI, onLoadFail } = useKakaoMapLoader();
  const [sdkLoaded, setSdkLoaded] = useState(false);

  const addParams = new URLSearchParams({
    appkey: process.env.NEXT_PUBLIC_KAKAO_KEY || "",
    autoload: "false",
    libraries: "services",
  }).toString();
  const kakaoMapUrl = `${KAKAO_API_BASE_URL}?${addParams}`;

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
        onLoad={() => setSdkLoaded(true)}
        onError={onLoadFail}
      />
      <div ref={mapContainer} className="w-[60rem] h-[40rem]"></div>
    </>
  );
}
