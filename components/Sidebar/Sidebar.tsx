"use client";

import icons from "@/utils/icons";
import { selectedCategoryAtom } from "@/atoms/selected_category_atom";

/***
 * data
 */
const data = [
  { label: "New", Icon: icons.FaHome },
  { label: "JS Mastery", Icon: icons.FaCodeBranch },
  { label: "Coding", Icon: icons.FaCodeBranch },
  { label: "ReactJS", Icon: icons.FaCodeBranch },
  { label: "NextJS", Icon: icons.FaCodeBranch },
  { label: "Music", Icon: icons.FaMusic },
  { label: "Education", Icon: icons.FaSchool },
  { label: "Podcast", Icon: icons.FaDigitalTachograph },
  { label: "Movie", Icon: icons.FaPhotoVideo },
  { label: "Gaming", Icon: icons.FaFantasyFlightGames },
  { label: "Live", Icon: icons.RiLiveFill },
  { label: "Sport", Icon: icons.FaPassport },
];

export default function Sidebar() {
  /***
   * selected category state
   */
  const [selectedCategory, setSelectedCategory] =
    selectedCategoryAtom.useState();

  /**
   * handle select
   */
  const handleSelect = (label: string) => {
    setSelectedCategory(label);
  };

  return (
    <div className="flex md:flex-col border-r border-gray-700 w-full md:w-[230px] md:h-[calc(100vh-60.8px)] cursor-pointer overflow-auto">
      {data.map(({ label, Icon }) => {
        return (
          <div
            key={label}
            onClick={() => handleSelect(label)}
            className={`group ${
              selectedCategory === label && "bg-red-700"
            } flex items-center gap-3 py-2 px-4 my-1 rounded-sm transition duration-200 hover:bg-red-700`}
          >
            <Icon
              className={`${
                selectedCategory === label && "text-white"
              } text-red-700 group-hover:text-white`}
            />
            <span>{label}</span>
          </div>
        );
      })}
    </div>
  );
}
