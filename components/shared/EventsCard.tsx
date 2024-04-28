import React, { ReactElement, ReactHTML } from "react";
import Image from "next/image";
interface CardProps {
  image?: any;
  title?: string;
  date?: string;
  subtitle?: string;
  type?: string;
  organiser?: string;
}

const Card: React.FC<CardProps> = ({
  image,
  title,
  date,
  subtitle,
  type,
  organiser,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {image && (
          <Image src={image} alt="edit" />
          
        // <img
        //   src={image}
        //   alt="Event"
        //   className="w-full h-48 object-cover object-center"
        // />
      )}
      <div className="p-4">
        {title && <h2 className="text-xl font-semibold mb-2">{title}</h2>}
        {date && <p className="text-gray-600 mb-2">{date}</p>}
        {subtitle && <p className="text-gray-700 mb-2">{subtitle}</p>}
        {type && <p className="text-gray-700 mb-2">Type: {type}</p>}
        {organiser && (
          <p className="text-gray-700 mb-2">Organiser: {organiser}</p>
        )}
      </div>
    </div>
  );
};

export default Card;


