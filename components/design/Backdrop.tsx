import { LoaderCircle } from "lucide-react";

const Backdrop = ({ open = true }) => {
  return open ? (
    <>
      <div className="fixed top-0 left-0 h-screen w-screen  z-[999] bg-black bg-opacity-20 pointer-events-auto"></div>

      <LoaderCircle className="fixed left-[50%] top-[50%] z-[1000] animate-spin w-16 h-16 text-white" />
    </>
  ) : null;
};

export default Backdrop;
