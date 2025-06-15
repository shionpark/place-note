import { useRef } from "react";

export const useKakaoMapLoader = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapObj = useRef<kakao.maps.Map | null>(null);

  const onLoadKakaoAPI = async ({
    lat = 33.450701,
    lng = 126.570667,
  }: {
    lat?: number;
    lng?: number;
  }) => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("❌ SDK 로드 안됨");
    }

    window.kakao.maps.load(() => {
      const center = new kakao.maps.LatLng(lat, lng);
      const options = {
        center,
        level: 3,
      };

      if (mapContainer.current) {
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        mapObj.current = map;

        const marker = new kakao.maps.Marker({ position: center });
        marker.setMap(mapObj.current);

        console.log("✅ 지도 생성 완료");
      }
    });
  };

  const onLoadFail = (e: Event) => console.error("❌ Kakao SDK 로드 실패", e);

  return { mapContainer, mapObj, onLoadKakaoAPI, onLoadFail };
};
