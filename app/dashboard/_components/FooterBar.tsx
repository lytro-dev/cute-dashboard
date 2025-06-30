import React, { ReactNode } from "react";
import { containerMaxW } from "../../_lib/config";
import lytroLogo from "../../_components/lytroLogo";

type Props = {
  children: ReactNode;
};

export default function FooterBar({ children }: Props) {
  const year = new Date().getFullYear();

  return (
    <footer className={`py-2 px-6 ${containerMaxW}`}>
      <div className="block md:flex items-center justify-between">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <b>
            &copy;{year},{` `}
            <a href="https://lytro.dev/" rel="noreferrer" target="_blank">
              lytro.dev
            </a>
            .
          </b>
          {` `}
          {children}
        </div>
        <div className="md:py-2">
          <a href="https://lytro.dev" rel="noreferrer" target="_blank">
            <lytroLogo className="w-auto h-8 md:h-6 mx-auto" />
          </a>
        </div>
      </div>
    </footer>
  );
}
