import { ReactNode } from "react";
import clsx from "clsx";
import Button from "./Button";

interface ModalProps {
  title: string;
  isOpen: boolean;
  children: ReactNode;
  closeModal: () => void;
  size?: "sm" | "md" | "lg";
}

const STOP = (e: React.MouseEvent) => e.stopPropagation();

export default function Modal({
  title,
  isOpen,
  children,
  closeModal,
  size = "md",
}: ModalProps) {
  return (
    /* Overlay */
    <div
      onMouseDown={closeModal}
      className={clsx(
        "fixed inset-0 z-[900] flex items-center justify-center bg-black/70",
        "transition-opacity duration-200 ease-linear",
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      {/* Modal Panel */}
      <div
        onMouseDown={STOP}
        className={clsx(
          "relative rounded-lg bg-white shadow-xl overflow-hidden",
          "transform transition-transform duration-300 ease-out",
          isOpen ? "translate-y-0" : "-translate-y-5",
          /* size variant */
          size === "sm" && "w-80",
          size === "md" && "w-[32rem]",
          size === "lg" && "w-[48rem]"
        )}
      >
        {/* Header */}
        <header className={"p-6"}>
          <h2 className="text-lg font-semibold">{title}</h2>
        </header>
        {/* Body */}
        <section className={"px-6 py-4"}>{children}</section>
        {/* Close Btn */}
        <Button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 hover:cursor-pointer text-2xl"
          aria-label="Close modal"
        >
          &times;
        </Button>
      </div>
    </div>
  );
}
