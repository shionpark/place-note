declare namespace kakao.maps {
  interface MapOptions {
    center: LatLng;
    level: number;
  }

  class Map {
    constructor(container: HTMLElement, options: MapOptions);
    setBounds(bounds: LatLngBounds): void;
  }

  class LatLng {
    constructor(lat: number, lng: number);
  }

  class Marker {
    constructor(options: { position: LatLng });
    setMap(map: Map): void;
  }

  class LatLngBounds {
    constructor();
    extend(latlng: LatLng): void;
    getSouthWest(): LatLng;
    getNorthEast(): LatLng;
  }

  class InfoWindow {
    constructor(options: { zIndex?: number; content?: string });
    open(map: Map, marker: Marker): void;
    setContent(content: string): void;
  }

  namespace services {
    type Status = "OK" | "ZERO_RESULT" | "ERROR";

    class Places {
      constructor();
      keywordSearch(
        keyword: string,
        callback: (data: any[], status: Status, pagination: any) => void
      ): void;
    }
  }

  namespace event {
    function addListener(
      target: any,
      type: string,
      handler: (mouseEvent?: any) => void
    ): void;
  }

  function load(callback: () => void): void;
}
