"use client";

import KakaoMap from "@/components/KakaoMap";

function Button() {
  return <button className="bg-blue-500 text-white px-4 py-2">Test</button>;
}

export default function Map() {
  return (
    <div>
      <KakaoMap />
      <Button />
    </div>
  );
}
