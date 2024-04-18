"use client";

interface ICB {
  color: string;
  variable?: string;
}
const ColorBlock = ({ color, variable }: ICB) => {
  const clr = "bg-" + `[${color}]`;
  return (
    <div className="flex justify-start items-center gap-1">
      <div
        className={`w-7 h-8 rounded`}
        style={{
          backgroundColor: color,
        }}
      />
      <div className="flex flex-col justify-start items-start">
        <span className="text-slate-700">{variable ? variable : "N/A"}</span>
        <span className="text-inactiveText text-sm">
          {color ? color : "N/A"}
        </span>
      </div>
    </div>
  );
};

export default ColorBlock;
