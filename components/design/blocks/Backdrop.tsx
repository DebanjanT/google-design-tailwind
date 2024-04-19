import Backdrop from "@/components/design/Backdrop";
import { useState } from "react";

const BackdropBlock = () => {
  const [showBackdrop, setShowBackdrop] = useState(false);
  return (
    <div>
      <Backdrop open={showBackdrop} />
      <div>
        <p className="text-lg">Backdrop</p>
        <p className="text-sm mb-3 text-inactiveText font-roboto">
          The Backdrop signals a state change within the application and can be
          used for creating loaders, dialogs, and more. In its simplest form,
          the Backdrop component will add a dimmed layer over your application.
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
    </div>
  );
};

export default BackdropBlock;
