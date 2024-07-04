/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 flex w-full bg-primary z-[999] border-b-2 border-secondary">
      <div className="flex items-center justify-end flex-grow px-4 py-4 shadow md:px-6 2xl:px-11">
        <div className="flex items-center gap-3 2xsm:gap-7">
          <div className="relative">
            <div className="flex items-center gap-4">
              <span className="hidden text-right lg:block">
                <span className="block text-sm font-bold text-white">
                  Hallo Bang
                </span>
                <span className="block text-xs text-secondary font-bowlby">
                  Fisiii
                </span>
              </span>
              <Link
                href=""
                className="bg-black px-2 py-2 rounded-2xl text-white font-bold text-sm hover:bg-white hover:text-black"
              >
                LOGOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
