"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faHeart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

type CardProps = {
  name: string;
  imageUrl: string;
  type: string;
  description: string;
};

const YugiohCard = ({ name, imageUrl, type, description }: CardProps) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flex flex-col items-start cursor-pointer overflow-visible">
      {/* Card Container */}
      <div
        className={`w-[2.3in] h-[3.3in] relative transform-style-preserve-3d transition-transform duration-500 ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        <div
          className={`absolute w-full h-full backface-hidden ${
            flipped ? "hidden" : "block"
          }`}
        >
          <img
            src={imageUrl}
            alt={`${name} - ${type} Card Image`}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        <div
          className={`absolute w-full h-full bg-gray-800 text-white rounded-lg p-4 transform overflow-auto backface-hidden ${
            flipped ? "block" : "hidden"
          }`}
        >
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <h4 className="text-md italic mb-2">{type}</h4>
          <p className="text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="mt-4 flex space-x-4">
        <button
          onClick={handleFlip}
          aria-label="Flip Card"
          className="text-gray-500 hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faSyncAlt} size="lg" />
        </button>

        <button
          aria-label="Add to Favorites"
          className="text-red-500 hover:text-red-300"
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </button>

        <button
          aria-label="Show Full Details"
          className="text-blue-500 hover:text-blue-300"
        >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default YugiohCard;
