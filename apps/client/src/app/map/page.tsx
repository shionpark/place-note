"use client";

import Button from "@/components/Button";
import KakaoMap from "@/components/KakaoMap";
import Modal from "@/components/Modal";
import { TestModal } from "@/components/TestModal";
import { useModal } from "@/hooks/useModal";
import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/modules/modalSlice";

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

      <TestModal />
    </>
  );
}
