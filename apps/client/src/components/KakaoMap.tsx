"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

enum Status {
  OK = "OK",
  ZERO_RESULT = "ZERO_RESULT",
  ERROR = "ERROR",
}

export function searchKeywords(map: kakao.maps.Map, keyword: string) {
  const geocoder = new window.kakao.maps.services.Geocoder();

  geocoder.addressSearch(
    keyword,
    function (
      result: {
        address_name: string;
        address_type: "REGION" | "ROAD" | "REGION_ADDR" | "ROAD_ADDR";
        x: string;
        y: string;
        address: kakao.maps.services.Address;
        road_address: kakao.maps.services.RoadAaddress;
      }[],
      status: Status
    ) {
      if (status === window.kakao.maps.services.Status.OK) {
        const resPosition = new kakao.maps.LatLng(result[0].x, result[0].y);
        displayMarker(
          map,
          resPosition,
          '<div style="padding:6px">인포윈도우</div>'
        );

        // const infoWindow = new kakao.maps.InfoWindow({
        //   content: '<div style="padding:6px">인포윈도우</div>',
        // });
        // infoWindow.open(map, marker);

        // map.setCenter(coords);
      }
    }
  );
}

export function displayMarker(
  map: kakao.maps.Map,
  locPosition: kakao.maps.LatLng,
  message: string
) {
  const marker = new window.kakao.maps.Marker({
    map,
    position: locPosition,
  });

  const infoWindow = new window.kakao.maps.InfoWindow({
    content: message,
  });
  infoWindow.open(map, marker);

  map.setCenter(locPosition);
}

export default function KakaoMap({
  isCurrentLocation,
}: {
  isCurrentLocation?: boolean;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [sdkLoaded, setSdkLoaded] = useState(false);

  useEffect(() => {
    // SDK 스크립트가 아직 로드 안 됐으면 대기
    if (!sdkLoaded || !window.kakao?.maps) return;
    if (!window.kakao || !window.kakao.maps) {
      console.error("❌ SDK 로드 안됨");
      return;
    }

    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(37.5642135, 127.0016985),
        level: 4,
      };
      const map = new window.kakao.maps.Map(mapRef.current, options);

      if (isCurrentLocation && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const {
            coords: { latitude, longitude },
          } = position;
          const locPosition = new window.kakao.maps.LatLng(latitude, longitude);
          const message = '<div style="padding:6px">인포윈도우</div>';
          displayMarker(map, locPosition, message);
        });
      } else {
        const message = "장소를 찾을수 없습니다.";
        displayMarker(map, options.center, message);
      }
    });
  }, [sdkLoaded]);

  return (
    <>
      <Script
        strategy="beforeInteractive"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_KEY}&autoload=false&libraries=services`}
        onLoad={() => setSdkLoaded(true)}
      />
      <div ref={mapRef} className="w-[60rem] h-[40rem]"></div>
    </>
  );
}
