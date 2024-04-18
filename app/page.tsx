"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className=" bg-white   shadow-1 ">
        <div className="container px-10 py-5 mx-auto flex justify-between items-center">
          <p className="text-xl">Google Tailwind Design</p>
          <div className="flex justify-end items-center gap-1">
            <button className="btn-text h-[36px]">Help</button>
            <button
              className="btn-contained h-[36px]"
              onClick={() => router.push("/design")}
            >
              Docs
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-10">
        <p className="text-sm font-roboto">
          Material UI is an open-source React component library that implements
          Google's Material Design. It's comprehensive and can be used in
          production out of the box.
        </p>
        <p className="text-center fixed bottom-3 text-sm text-inactiveText">
          @Copyright Protexted | Debanjan Tewary
        </p>
      </div>
    </>
  );
}
