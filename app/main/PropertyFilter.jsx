import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, DollarSign, Home } from "lucide-react";
import Header from "./Header";

const priceRanges = [
  { value: "0-100", label: "$0 - $100" },
  { value: "100-200", label: "$100 - $200" },
  { value: "200-300", label: "$200 - $300" },
];

const bedroomsOptions = [
  { value: "1", label: "1 Bedroom" },
  { value: "2", label: "2 Bedrooms" },
  { value: "3", label: "3 Bedrooms" },
];

export default function PropertyFilter({ onChange }) {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [bedrooms, setBedrooms] = useState("");

  const handleFilterChange = () => {
    onChange({ location, priceRange, bedrooms });
  };

  return (
 
    <div className="bg-white p-8 rounded-lg shadow-lg mb-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Find Your Dream Property
      </h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <Search className="text-gray-400" />
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="flex-grow"
          />
        </div>

        <div className="flex items-center space-x-4">
          <DollarSign className="text-gray-400" />
          <Select onValueChange={setPriceRange} value={priceRange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Price Range</SelectLabel>
                {priceRanges.map((range) => (
                  <SelectItem key={range.value} value={range.value}>
                    {range.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-4">
          <Home className="text-gray-400" />
          <Select onValueChange={setBedrooms} value={bedrooms}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Bedrooms</SelectLabel>
                {bedroomsOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleFilterChange}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Search Properties
        </Button>
      </div>
    </div>
    
  );
}
