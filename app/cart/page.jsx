"use client";
import React from "react";
import { useAuth } from "@clerk/nextjs";
import { useBooking } from "../context/BookingContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart, AlertCircle, Trash2, MapPin, User } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
        <span className="loading loading-spinner loading-lg"></span>
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
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-3xl font-bold mb-8 flex items-center justify-center">
        Your Cart
      </h1>

      {safeBookedProperties.length === 0 ? (
        <Card className="bg-yellow-100 border-yellow-500 text-yellow-700 mb-8">
          <CardContent className="flex items-center p-4">
            <AlertCircle className="mr-3" />
            <p>Your cart is empty. Start browsing our amazing properties!</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 mb-8">
            {bookedProperties.map((property) => (
              <Card
                key={property.id}
                className="p-2 shadow-md flex flex-col md:flex-row items-center"
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full md:w-48 h-48 md:ml-4 object-cover rounded-lg"
                />
                <div className="ml-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold">
                      {property.title}
                    </CardTitle>
                    <div className="flex items-start text-gray-600 mb-4 space-x-6">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{property.location}</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span className="text-sm">
                          {property.bedrooms} Bedrooms
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm my-1">
                        {property.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="bg-indigo-50 text-indigo-700 rounded-full px-2 py-1 text-xs font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <CardFooter className="flex justify-between items-center p-4">
                    <p className="text-2xl font-bold text-indigo-600">
                      ₹{property.price}
                      <span className="text-base font-normal text-gray-600">
                        /night
                      </span>
                    </p>
                    <Button
                      variant="destructive"
                      onClick={() => handleRemoveProperty(property.id)}
                      className="bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
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
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => router.push("/checkout")}
                className="w-full bg-indigo-600 hover:bg-indigo-700 transition duration-300 ease-in-out"
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
