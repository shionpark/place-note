"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import { useModal } from "@/hooks/useModal";

export default function Home() {
  const { isOpen, openModal, closeModal } = useModal();
  const clickButton = () => {
    openModal();
  };

  const router = useRouter();
  const clickRouter = () => {
    router.push("/map");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <section className="flex flex-col justify-center gap-8">
        <div className="flex flex-col gap-4 justify-center px-3 text-center">
          <span className="font-bold text-4xl text-amber-500">
            📝 Place Note
          </span>
          <p className="text-lg text-gray-600">
            장소를 기록하고 쌓아가는 나만의 장소 노트
          </p>
        </div>
        <Button onClick={clickButton} size="lg">
          시작하기
        </Button>
      </section>

      <Modal
        isOpen={isOpen}
        title="권한 요청"
        closeModal={closeModal}
        size="sm"
      >
        <div className="flex flex-col">
          <span className="text-center">
            현재 위치 접근에 동의하시겠습니까?
          </span>
          <div className="flex flex-col gap-2 justify-between mt-8">
            <Button onClick={clickRouter}>동의</Button>
            <Button
              onClick={() => alert("위치 접근을 거부하였습니다.")}
              variant="outline"
            >
              동의하지 않음
            </Button>
          </div>
        </div>
      </Modal>
    </main>
  );
}
