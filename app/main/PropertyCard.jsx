import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ShoppingCart } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { Toast, ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export default function PropertyCard({ property }) {
  const { addPropertyToBooking } = useBooking();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addPropertyToBooking(property);
    toast({
      title: "Added to Cart",
      action: <ToastAction altText="Undo">Undo</ToastAction>,
    });
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex flex-col h-full">
        <div className="relative">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-2">
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
            ₹{property.price}
              <span className="text-base font-normal text-gray-600">
                /night
              </span>
            </p>
            <div className="w-full">
              <Button
                variant="outline"
                className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
