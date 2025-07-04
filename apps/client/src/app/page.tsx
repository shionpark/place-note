"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { openModal } from "@/store/modules/modalSlice";
import { useAppDispatch, useAppSelector } from "@/store";
import { TestModal } from "@/components/TestModal";

export default function Home() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const clickButton = () => {
    router.push("/map");
    dispatch(openModal("CONFIRM_DELETE"));
  };

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-4 justify-center px-3 text-center">
          <span className="font-bold text-4xl text-amber-500">
            📝 Place Note
          </span>
          <p className="text-lg text-gray-600">
            장소를 기록하고 쌓아가는 나만의 장소 노트
          </p>
          {/* <ButtonTest /> */}
        </div>
        <Button onClick={clickButton} size="lg">
          시작하기
        </Button>
      </div>
      <TestModal />
    </section>
  );
}
