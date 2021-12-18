import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import BadgeAvailable from "../../assets/badge_available.png";
import BadgeLocked from "../../assets/badge_lock.png";

interface Props {
  disabled?: Boolean;
  rank: "Beginner" | "Intermediate" | "Advanced";
  level: 1 | 2 | 3;
  course: string;
}

const Badge: React.FC<Props> = ({
  disabled,
  level,
  rank,
  course,
}): JSX.Element => {
  const router = useRouter();

  return (
    <div
      className={`bg-[#F5F5F5] border  font-medium rounded ${
        disabled && "opacity-[0.24] border-[#7A7A7A]"
      }`}
    >
      <div className="flex flex-col w-[372px]">
        <div className="flex gap-4 p-[18px] border-[#E0E0E0] border-b-2">
          {disabled ? (
            <Image
              src={BadgeLocked}
              alt="This badge is not available for claiming"
            />
          ) : (
            <Image
              src={BadgeAvailable}
              alt="This badge is available for claiming"
            />
          )}
          <span>{rank}</span> / <span>Level {level}</span>
        </div>

        <div className="p-[18px]">
          <p>Show potential employers you know the basics of {course}</p>
          <button
            disabled={Boolean(disabled)}
            onClick={() => router.push("/test")}
            className="py-[17px] bg-[#47399D] text-white w-full mt-12"
          >
            Test me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Badge;
