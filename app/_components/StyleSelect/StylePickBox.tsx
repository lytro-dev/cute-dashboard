"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import CardBox from "../CardBox";
import { useState } from "react";

type Props = {
  style: string;
};

export default function StylePickBox({ style }: Props) {
  const router = useRouter();
  const [imgSrc, setImgSrc] = useState(`https://static.lytro.dev/templates/one/small/${style}-v3.png`);

  const handleStylePick = (e: React.MouseEvent, style: string) => {
    e.preventDefault();

    document.documentElement.classList.forEach((token) => {
      if (token.indexOf("style") === 0) {
        document.documentElement.classList.replace(token, `style-${style}`);
      }
    });

    router.push("/dashboard");
  };

  // fallback image paths
  const fallbackMap: Record<string, string> = {
    white: "/white-fallback.png",
    basic: "/basic-fallback.png",
  };

  return (
    <CardBox
      className="cursor-pointer bg-gray-50"
      isHoverable
      onClick={(e) => handleStylePick(e, style)}
    >
      <h1 className="text-xl md:text-2xl font-black capitalize">{style}</h1>
      <h2 className="text-lg md:text-xl">& Dark mode</h2>
    </CardBox>
  );
}
