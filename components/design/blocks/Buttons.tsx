import { ExternalLink, LoaderCircle } from "lucide-react";

const Buttons = () => {
  return (
    <div>
      <p className="text-lg mb-1">Buttons</p>
      <div className="flex flex-wrap justify-start items-center gap-2">
        <button className="btn-subtle h-[36px]">Subtle</button>
        <button className="btn-outlined h-[36px]">Outlined</button>
        <button className="btn-contained h-[36px]">Contained</button>
        <button className="btn-gradient h-[36px]">Gradient</button>
        <button className="btn-text h-[36px]">Text</button>
        <button className="btn-link h-[36px]">
          <ExternalLink className="w-4 h-4" /> Link
        </button>
        <button disabled className="btn-outlined h-[36px]">
          Disabled
        </button>
        <button className="btn-link h-[36px]" disabled>
          <ExternalLink className="w-4 h-4" /> Disabled Link
        </button>
        <button disabled className="btn-text h-[36px]">
          <LoaderCircle className="animate-spin" />
          Loading
        </button>
      </div>
    </div>
  );
};

export default Buttons;
