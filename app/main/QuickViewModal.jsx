import React from "react";
import { MapPin, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";

export default function QuickViewModal({ isOpen, onClose, property }) {
  if (!isOpen || !property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="bg-black/50 backdrop-blur-sm" />
      <DialogContent className="sm:max-w-[425px] md:max-w-[600px] lg:max-w-[800px] p-2 rounded-md overflow-hidden">
        <div className="relative h-64 sm:h-80">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full rounded-md object-cover"
          />
        </div>

        <div className="px-6 py-2">
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            {property.title}
          </h1>
          <p className="text-gray-700 mb-6">{property.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-indigo-600" />
              <span>
                {property.bedrooms ? `${property.bedrooms} Bedrooms` : "N/A"}
              </span>
            </div>
          </div>
          <p className="text-2xl font-semibold text-indigo-600 mb-6">
            ₹{property.price}
            <span className="text-base font-normal text-gray-600 ml-1">
              /night
            </span>
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {property.amenities.map((amenity, index) => (
              <span
                key={index}
                className="bg-indigo-50 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium"
              >
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
