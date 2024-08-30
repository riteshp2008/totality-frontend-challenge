"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ShoppingCart, CircleCheckBig } from "lucide-react";
import { useBooking } from "../context/BookingContext";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import QuickViewModal from "./QuickViewModal";
import { SignedIn, SignedOut } from "@clerk/nextjs";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PropertyCard({ property }) {
  const { addPropertyToBooking } = useBooking();
  const { toast } = useToast();
  const [isQuickViewOpen, setQuickViewOpen] = useState(false);
  const router = useRouter();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent the click from bubbling up to the parent div
    addPropertyToBooking(property);
    toast({
      title: (
        <div className="flex space-x-4">
          <CircleCheckBig className="text-green-500" />
          <p>Added to cart</p>
        </div>
      ),
    });
  };

  const openQuickView = () => {
    setQuickViewOpen(true);
  };

  const closeQuickView = () => {
    setQuickViewOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex flex-col h-full max-w-xs sm:max-w-sm md:max-w-md">
        <div className="relative cursor-pointer" onClick={openQuickView}>
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-48 sm:h-56 md:h-64 object-cover"
          />
        </div>
        <div className="p-4 sm:p-6 flex flex-col flex-grow">
          <h2 className="text-lg sm:text-xl font-bold text-gray-800 line-clamp-2 mb-2">
            {property.title}
          </h2>
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.location}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span className="text-sm">{property.bedrooms} Bedrooms</span>
            </div>
          </div>
          <div className="mt-auto">
            <p className="text-2xl font-bold text-indigo-600 mb-4">
              ₹{property.price}
              <span className="text-base font-normal text-gray-600">
                /night
              </span>
            </p>
            <SignedIn>
              <Button
                variant="outline"
                className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </SignedIn>
            <SignedOut>
              <Button
                variant="outline"
                className="w-full border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <Link href="/sign-in">Sign-In</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </div>

      <QuickViewModal
        isOpen={isQuickViewOpen}
        onClose={closeQuickView}
        property={property}
      />
    </>
  );
}
