import { Rocket } from "lucide-react";
import Link from "next/link";
import React from "react";

const Sticker = () => {
  return (
    <Link href={"#hero"} id="sticky-container">
      <div className="fixed right-5 bottom-5 rounded-full cursor-pointer z-[999] group p-2 items-center justify-center text-neutral-300 hover:text-white">
        <div className="opacity-0 group-hover:opacity-100 transition-all font-light">
          Go top
        </div>
        <div className="items-center justify-center ">
          <Rocket size={24} />
        </div>
      </div>
    </Link>
  );
};

export default Sticker;
