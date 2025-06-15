"use client";

import { useGeoLocation } from "@/hooks/useGeolocation";
import { Button } from "ui";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { location, errorMessage } = useGeoLocation();

  return (
    <main className="flex justify-center items-center h-screen ">
      <div className="flex justify-center items-center">
        <Link href={"/map"}>지도</Link>
        <Button />
        {location ? (
          <p>{/* 현재 위치: {location.latitude}, {location.longitude} */}</p>
        ) : errorMessage ? (
          <p className="text-red-500">위치 정보 에러: {errorMessage}</p>
        ) : (
          <p>위치 정보를 가져오는 중...</p>
        )}
      </div>
    </main>
  );
}
