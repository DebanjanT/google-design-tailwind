"use client";
import Backdrop from "@/components/design/Backdrop";
import BackdropBlock from "@/components/design/blocks/Backdrop";
import Buttons from "@/components/design/blocks/Buttons";
import DropdownBlock from "@/components/design/blocks/DropdownBlock";
import ColorBlock from "@/components/design/ColorBlock";
import Dropdown from "@/components/design/Menu";
import Modal from "@/components/design/Modal";
import Dialoge from "@/components/design/Modal";
import { ArrowBigDown, ChevronLeft, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
const packageJson = require("../../package.json");
const page = () => {
  const router = useRouter();

  const colors = [
    {
      color: "#1565cf",
      variable: "subtleBtnText",
    },
  ];
  return (
    <div className="relative">
      <div className="flex justify-between items-center py-6 gap-1 container mx-auto ">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-1">
          <button
            className="btn-link h-[36px] px-0 text-triadicPrimary"
            onClick={router.back}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>
          <p className="text-2xl px-1">Google Tailwind Design</p>
        </div>
        <p className="font-mono">v{packageJson.version}</p>
      </div>
      <div className="container mx-auto  px-8 sm:px-20 py-6 bg-white border border-borderColor sm:rounded-xl">
        <div>
          <p className="text-lg mb-1">Colors</p>
          <div className="flex justify-start items-center gap-2">
            {colors?.map((color, index) => (
              <ColorBlock
                color={color.color}
                variable={color.variable}
                key={color.variable}
              />
            ))}
          </div>
        </div>
        <hr className="my-3" />
        <Buttons />
        <hr className="my-3" />
        <BackdropBlock />
        <hr className="my-3" />
        <DropdownBlock />
        <hr className="my-3 " />
        <div>
          <p className="text-lg">Modal</p>
          <p className="text-sm mb-3 text-inactiveText font-roboto">
            A Modal is a type of modal window that appears in front of app
            content to provide critical information or ask for a decision.
            Dialogs disable all app functionality when they appear, and remain
            on screen until confirmed, dismissed, or a required action has been
            taken.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2">
            <Modal />
          </div>
        </div>
      </div>
      <p className="fixed bottom-3 right-0 px-2 py-1 bg-triadicPrimary rounded-l-full w-[4.5rem] hover:w-24 hover:text-base transition-[width_font-size] font-roboto text-sm text-white duration-300">
        Settings
      </p>
    </div>
  );
};

export default page;
