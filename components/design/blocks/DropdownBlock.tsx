import Dropdown from "@/components/design/Menu";

const DropdownBlock = () => {
  return (
    <div>
      <p className="text-lg">Dropdown Menu</p>
      <p className="text-sm mb-3 text-inactiveText font-roboto">
        A menu displays a list of choices on a temporary surface. It appears
        when the user interacts with a button, or other control.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-2">
        <Dropdown />
      </div>
    </div>
  );
};

export default DropdownBlock;
