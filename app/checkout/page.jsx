"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useBooking } from "../context/BookingContext";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"; // Adjusted import for Select
import { toast } from "@/components/ui/use-toast"; // Ensure this is correctly imported and used

function CheckoutPage() {
  const { bookedProperties } = useBooking();
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    creditCard: "",
    phoneNumber: "",
    countryCode: "+91", // Default country code, adjust as needed
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, countryCode: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.creditCard)
      newErrors.creditCard = "Credit card details are required";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = async () => {
    if (!validateForm()) return;

    setIsProcessing(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast({
        title: "Checkout Complete",
        description: "Your booking has been confirmed.",
        status: "success",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        status: "error",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const totalPrice = bookedProperties.reduce(
    (sum, property) => sum + (property.price || 0),
    0
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold my-8 text-center">Checkout</h1>
      <div className="grid grid-cols-1 gap-6 mb-8">
        {bookedProperties.map((property) => (
          <Card
            key={property.id}
            className="p-4 shadow-md flex flex-col md:flex-row items-center"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full md:w-48 h-48 object-cover rounded-lg"
            />
            <div className="ml-4">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold">
                  {property.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">₹{property.price}/night</p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <Input
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={errors.fullName ? "border-red-500" : ""}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName}</p>
          )}
        </div>
        <div>
          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div>
          <div className="flex items-center gap-2">
            <Select
              value={formData.countryCode}
              onValueChange={handleSelectChange}
              className="w-1/3"
            >
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+91">+91</SelectItem>
                <SelectItem value="+1">+1</SelectItem>
                <SelectItem value="+44">+44</SelectItem>
                <SelectItem value="+81">+81</SelectItem>
                <SelectItem value="+61">+61</SelectItem>
                <SelectItem value="+33">+33</SelectItem>
                <SelectItem value="+49">+49</SelectItem>
                <SelectItem value="+39">+39</SelectItem>
                <SelectItem value="+82">+82</SelectItem>
                <SelectItem value="+86">+86</SelectItem>
              </SelectContent>
            </Select>
            <Input
              label="Phone Number"
              name="phoneNumber"
              type="text"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={errors.phoneNumber ? "border-red-500" : ""}
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>
        <div>
          <Input
            label="Credit Card"
            name="creditCard"
            type="text"
            value={formData.creditCard}
            onChange={handleChange}
            placeholder="Enter your credit card details"
            className={errors.creditCard ? "border-red-500" : ""}
          />
          {errors.creditCard && (
            <p className="text-red-500 text-sm">{errors.creditCard}</p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 p-4 bg-white shadow-md rounded-lg">
        <p className="text-2xl font-bold">Total Price:</p>
        <p className="text-2xl font-bold text-indigo-600">
          ₹{totalPrice.toFixed(2)}
        </p>
      </div>
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          className="w-full md:w-auto border-2"
          onClick={handleCheckout}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Complete Checkout"}
        </Button>
      </div>
    </div>
  );
}

export default CheckoutPage;
