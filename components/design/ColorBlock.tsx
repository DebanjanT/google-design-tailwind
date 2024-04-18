"use client";

interface ICB {
  color: string;
  variable?: string;
}
const ColorBlock = ({ color, variable }: ICB) => {
  return (
    <div className="flex justify-start items-center gap-1">
      <div
        className={`w-7 h-8 rounded`}
        style={{
          backgroundColor: color,
        }}
      ></div>
      <div className="flex flex-col justify-start items-start">
        <p className="text-slate-700">{variable ? variable : "N/A"}</p>
        <p className="text-inactiveText text-sm">{color ? color : "N/A"}</p>
      </div>
    </div>
  );
};

export default ColorBlock;
