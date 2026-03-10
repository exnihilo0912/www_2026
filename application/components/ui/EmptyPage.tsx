import { FaceFrownIcon } from "@heroicons/react/24/solid";

export default function EmptyPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 my-20">
      <FaceFrownIcon className="size-25 text-stone-300" />
      <h2 className="text-1xl md:text-2xl text-stone-500 font-bold">Nothing to see here... for now.</h2>
    </div>
  );
}