"use client";

import KakaoMap from "@/components/KakaoMap";

export default function Map() {
  return (
    <>
      <div className="flex flex-col px-12">
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          className="p-4 border rounded-lg border-gray-300 w-xl"
        />
      </div>
      <KakaoMap />
    </>
  );
}
