export function useSearchKeyword() {
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
}
