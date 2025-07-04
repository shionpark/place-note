"use client";

import { useMemo } from "react";

import Modal from "@/components/Modal";
import Button from "./Button";

import { useAppDispatch, useAppSelector } from "@/store";
import { closeModal } from "@/store/modules/modalSlice";

export function TestModal() {
  const currentModal = useAppSelector((s) => s.modal.opened);
  const isOpen = useMemo(
    () => currentModal === "CONFIRM_DELETE",
    [currentModal]
  );

  const dispatch = useAppDispatch();

  const rejectAccess = () => {
    alert("위치 접근을 거부하였습니다.");
    closeModal();
  };

  return (
    <>
      <Modal
        size="sm"
        title="권한 요청"
        isOpen={isOpen}
        closeModal={() => dispatch(closeModal())}
      >
        <div className="flex flex-col">
          <span className="text-center">
            현재 위치 접근에 동의하시겠습니까?
          </span>
          <div className="flex flex-col gap-2 justify-between mt-8">
            <Button>동의</Button>
            <Button onClick={rejectAccess} variant="outline">
              동의하지 않음
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
