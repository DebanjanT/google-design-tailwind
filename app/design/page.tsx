"use client";
import ColorBlock from "@/components/design/ColorBlock";

const page = () => {
  const colors = [
    {
      color: "#1565cf",
      variable: "subtleBtnText",
    },
  ];
  return (
    <div className="container mx-auto">
      <p className="px-20 mx-auto mb-3 mt-3 text-2xl">Google Design</p>
      <div className="px-8 md:px-20 py-6 bg-white border rounded-xl">
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
            <button className="bg-subtleBtnSurface text-subtleBtnText text-sm  min-h-[24px] h-[36px] inline-block box-border rounded-[4px] tracking-wider p-[1px_24px] border-[1px] border-transparent">
              Create Account
            </button>
            <button
              disabled
              className="bg-subtleBtnSurface text-subtleBtnText text-sm  min-h-[24px] h-[36px] inline-block box-border rounded-[4px] tracking-wider p-[1px_24px] border-[1px] border-transparent"
            >
              Disabled
            </button>
            <button className="bg-transparent text-outlineBtnText text-sm  min-h-[24px] h-[36px] inline-block box-border rounded-[4px] tracking-wider p-[1px_24px] border-[1px] border-borderColor">
              Add Condition
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
