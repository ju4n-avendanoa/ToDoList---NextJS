import { PlusCircleIcon } from "@heroicons/react/24/outline";

type Props = {
  index: number;
  onCreateNewColumn: (index: number) => void;
};

function CreateColumnButton({ index, onCreateNewColumn }: Props) {
  return (
    <button
      className="bg-zinc-900 text-white flex gap-2 items-center py-2 px-4 w-[180px] rounded-lg active:scale-95 transition duration-150 hover:scale-105 select-none"
      onClick={() => onCreateNewColumn(index)}
    >
      <PlusCircleIcon className="w-6 h-6" />
      <span className="text-sm lg:text-base">Create column</span>
    </button>
  );
}

export default CreateColumnButton;
