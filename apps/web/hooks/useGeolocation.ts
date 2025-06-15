import { useState, useEffect } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = (options = {}) => {
  const [location, setLocation] = useState<Location>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;
    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (err: GeolocationPositionError) => {
    setErrorMessage(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) {
      setErrorMessage("위치 정보를 불러오지 못했습니다.");
      return;
    }
    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, []);

  return { location, errorMessage };
};
