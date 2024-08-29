import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, MapPin, Users } from "lucide-react";

export default function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex flex-col h-full">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <div className="absolute top-0 right-0 bg-white px-2 py-1 m-2 rounded-full text-xs font-semibold text-gray-700 flex items-center">
          <Star className="w-4 h-4 text-yellow-400 mr-1" />
          {property.rating}
        </div>
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 line-clamp-2">
            {property.title}
          </h2>
        </div>
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <Users className="w-4 h-4 mr-1" />
          <span className="text-sm">Up to {property.guests} guests</span>
        </div>
        <div className="mt-auto">
          <p className="text-2xl font-bold text-indigo-600 mb-4">
            ${property.price}
            <span className="text-base font-normal text-gray-600">/night</span>
          </p>
          <Link href={`/properties/${property.id}`} className="block w-full">
            <Button
              variant="default"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
