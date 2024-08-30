"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { useBooking } from "../context/BookingContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, AlertCircle, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Cart() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  const { bookedProperties, removePropertyFromBooking } = useBooking();

  const safeBookedProperties = Array.isArray(bookedProperties)
    ? bookedProperties
    : [];
  const totalPrice = safeBookedProperties.reduce(
    (sum, property) => sum + (property.price || 0),
    0
  );

  React.useEffect(() => {
    if (isLoaded && !userId) {
      router.push("/sign-in");
    }
  }, [isLoaded, userId, router]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!userId) {
    return null;
  }

  const handleRemoveProperty = (propertyId) => {
    removePropertyFromBooking(propertyId);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
        <ShoppingCart className="mr-4 text-indigo-600" />
        Your Cart
      </h1>

      {safeBookedProperties.length === 0 ? (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-8 rounded-md flex items-center">
          <AlertCircle className="mr-3" />
          <p>Your cart is empty. Start browsing our amazing properties!</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 mb-8">
            {safeBookedProperties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row items-center"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full md:w-48 h-48 object-cover rounded-lg"
                />
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      {property.title}
                    </h2>
                    <p className="text-gray-600 mb-2">{property.location}</p>
                    <p className="text-gray-600">
                      Up to {property.guests} guests
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-2xl font-bold text-indigo-600">
                      ${property.price}
                      <span className="text-base font-normal text-gray-600">
                        /night
                      </span>
                    </p>
                    <Button
                      variant="destructive"
                      onClick={() => handleRemoveProperty(property.id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-600">Total Properties:</span>
              <span className="font-semibold">
                {safeBookedProperties.length}
              </span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-600">Total Price:</span>
              <span className="text-2xl font-bold text-indigo-600">
                ₹{totalPrice.toFixed(2)}
              </span>
            </div>
            <Button
              onClick={() => router.push("/checkout")}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Proceed to Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
