import React, { ReactElement, ReactHTML } from "react";
import Image from "next/image";
interface CardProps {
  image?: any;
  title?: string;
  description?: string;
  location?: string;
  date?: string;
  price?: string;
  isFree?: boolean;
  type?: string;
  organiser?: string;
  category?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  date,
  location,
  price,
  isFree,
  category,
  type,
  organiser,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {image && <Image src={image} alt="edit" width={500} height={500} />}
      <div className="p-4">
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {description && (
          <p className="text-gray-700 mb-2">
            {" "}
            <span className=" font-medium">Description: </span>
            {description}
          </p>
        )}
        {category && (
          <p className="text-gray-700 mb-2">
            {" "}
            <span className=" font-medium">Category: </span>
            {category}
          </p>
        )}
        {location && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className=" font-medium">Venue: </span> {location}
          </p>
        )}
        {date && (
          <p className="text-gray-600 mb-2">
            {" "}
            <span className=" font-medium">Date: </span>
            {date}
          </p>
        )}
        {price && <p className="text-gray-600 mb-2">{price}</p>}

        {isFree && (
          <p className="text-gray-700 font-bold mb-2">Type: {isFree}</p>
        )}
        {organiser && (
          <p className="text-gray-700 mb-2">
            {" "}
            <span className=" font-medium">Organiser: </span> {organiser}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;












