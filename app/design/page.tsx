"use client";
import Backdrop from "@/components/design/Backdrop";
import ColorBlock from "@/components/design/ColorBlock";
import Dropdown from "@/components/design/Menu";
import Modal from "@/components/design/Modal";
import Dialoge from "@/components/design/Modal";
import { ArrowBigDown, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const page = () => {
  const router = useRouter();
  const [showBackdrop, setShowBackdrop] = useState(false);
  const colors = [
    {
      color: "#1565cf",
      variable: "subtleBtnText",
    },
  ];
  return (
    <>
      <Backdrop open={showBackdrop} />

      <div className="container mx-auto relative">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center py-6 gap-1">
          <button className="btn-text h-[36px]" onClick={router.back}>
            Back
          </button>
          <p className="text-2xl">Google Tailwind Design</p>
        </div>
        <div className="px-8 sm:px-20 py-6 bg-white border border-borderColor sm:rounded-xl">
          <div>
            <p className="text-lg mb-1">Colors</p>
            <div className="flex justify-start items-center gap-2">
              {colors?.map((color, index) => (
                <ColorBlock color={color.color} variable={color.variable} />
              ))}
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <p className="text-lg mb-1">Buttons</p>
            <div className="flex flex-wrap justify-start items-center gap-2">
              <button className="btn-subtle h-[36px]">Subtle</button>
              <button disabled className="btn-outlined h-[36px]">
                Disabled
              </button>
              <button className="btn-outlined h-[36px]">Outlined</button>
              <button className="btn-contained h-[36px]">Contained</button>
              <button className="btn-gradient h-[36px]">Gradient</button>
              <button className="btn-text h-[36px]">Text</button>
              <button disabled className="btn-text h-[36px]">
                <LoaderCircle className="animate-spin" />
                Loading
              </button>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <p className="text-lg">Backdrop</p>
            <p className="text-sm mb-3 text-inactiveText font-roboto">
              The Backdrop signals a state change within the application and can
              be used for creating loaders, dialogs, and more. In its simplest
              form, the Backdrop component will add a dimmed layer over your
              application.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 w-full">
              <button
                className="btn-subtle h-[36px]"
                onClick={() => setShowBackdrop(true)}
              >
                Show Backdrop
              </button>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <p className="text-lg">Dropdown Menu</p>
            <p className="text-sm mb-3 text-inactiveText font-roboto">
              A menu displays a list of choices on a temporary surface. It
              appears when the user interacts with a button, or other control.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2">
              <Dropdown />
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <p className="text-lg">Modal</p>
            <p className="text-sm mb-3 text-inactiveText font-roboto">
              A Modal is a type of modal window that appears in front of app
              content to provide critical information or ask for a decision.
              Dialogs disable all app functionality when they appear, and remain
              on screen until confirmed, dismissed, or a required action has
              been taken.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2">
              <Modal />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
