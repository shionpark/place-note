import { useRef } from "react";

const displayMarker = (
  map: kakao.maps.Map,
  position: { latitude: number; longitude: number },
  placeName?: string
) => {
  const markerPosition = new kakao.maps.LatLng(
    position.latitude,
    position.longitude
  );
  const marker = new kakao.maps.Marker({ position: markerPosition });
  marker.setMap(map);

  if (placeName) {
    const infoWindow = new kakao.maps.InfoWindow({
      content: `<div>${placeName}</div>`,
    });
    kakao.maps.event.addListener(marker, "click", () => {
      infoWindow.open(map, marker);
    });
  }
};

const searchKeywords = (map: kakao.maps.Map, keyword: string) => {
  const places = new kakao.maps.services.Places();

  const callback = (data: any[], status: string) => {
    if (status !== "OK") return;

    const bounds = new kakao.maps.LatLngBounds();

    data.forEach((place) => {
      const position = {
        latitude: parseFloat(place.y),
        longitude: parseFloat(place.x),
      };

      displayMarker(map, position, place.place_name);

      bounds.extend(new kakao.maps.LatLng(place.y, place.x));
    });

    map.setBounds(bounds);
  };

  places.keywordSearch(keyword, callback);
};

export const useKakaoMapLoader = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapObj = useRef<kakao.maps.Map | null>(null);

  const onLoadKakaoAPI = async ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("❌ SDK 로드 안됨");
    }

    window.kakao.maps.load(() => {
      const center = new kakao.maps.LatLng(
        latitude ?? 33.450701,
        longitude ?? 126.570667
      );
      const options = {
        center,
        level: 3,
      };
      if (mapContainer.current) {
        const map = new window.kakao.maps.Map(mapContainer.current, options);
        mapObj.current = map;

        console.log("✅ 지도 생성 완료");
      }
    });
  };

  return { mapContainer, mapObj, onLoadKakaoAPI, searchKeywords };
};
