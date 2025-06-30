"use client";

import { useRouter } from "next/navigation";
import CardBox from "../CardBox";
<<<<<<< HEAD
=======
import Icon from "../Icon";
import { mdiWhiteBalanceSunny, mdiWeatherNight } from "@mdi/js";
>>>>>>> cfe454080dfdeb9125e82d6b147cb1b4612323e8

type Props = {
  style: string;
};

export default function StylePickBox({ style }: Props) {
  const router = useRouter();

  const handleStylePick = (e: React.MouseEvent, style: string) => {
    e.preventDefault();

    document.documentElement.classList.forEach((token) => {
      if (token.indexOf("style") === 0) {
        document.documentElement.classList.replace(token, `style-${style}`);
      }
    });

    router.push("/dashboard");
  };

<<<<<<< HEAD
=======
  // Choose icon based on style
  const iconMap: Record<string, string> = {
    white: mdiWhiteBalanceSunny,
    basic: mdiWeatherNight,
  };

>>>>>>> cfe454080dfdeb9125e82d6b147cb1b4612323e8
  return (
    <CardBox
      className="cursor-pointer bg-gray-50"
      isHoverable
      onClick={(e) => handleStylePick(e, style)}
    >
      <div className="mb-3 md:mb-6 flex justify-center">
        <Icon path={iconMap[style]} size={48} />
      </div>
      <h1 className="text-xl md:text-2xl font-black capitalize">{style}</h1>
      <h2 className="text-lg md:text-xl">& Dark mode</h2>
    </CardBox>
  );
}
