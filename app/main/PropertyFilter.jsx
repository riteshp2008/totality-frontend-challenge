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
import {
  Search,
  Home,
  MapPin,
  Bed,
  IndianRupee,
  X,
  Filter,
} from "lucide-react";

const priceRanges = [
  { value: "0-1000", label: "₹0 - ₹1000" },
  { value: "1000-3000", label: "₹1000 - ₹3000" },
  { value: "3000-5000", label: "₹3000 - ₹5000" },
  { value: "5000-8000", label: "₹5000 - ₹8000" },
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
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterChange = () => {
    onChange({ location, priceRange, bedrooms });
  };

  const handleClearFilters = () => {
    setLocation("");
    setPriceRange("");
    setBedrooms("");
    onChange({ location: "", priceRange: "", bedrooms: "" });
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-white p-6 my-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-base lg:text-3xl font-bold mb-2 text-center text-gray-800 flex items-center justify-between gap-1">
        Find Your Dream Property
        <Button
          onClick={toggleFilter}
          variant="outline"
          className="flex-shrink-0 border border-gray-300 text-gray-600 py-1 md:py-2 px-2 md:px-3 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
        >
          <Filter className="w-4 h-4 md:mr-2" />
          <p className="hidden md:flex">Filter</p>
        </Button>
      </h2>

      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="flex-grow flex items-center gap-2 border p-2 rounded-md">
            <MapPin className="w-5 h-5 text-gray-500" />
            <Input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              className="flex-grow border-none bg-transparent focus:ring-0"
            />
          </div>
        </div>
        {isFilterOpen && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <IndianRupee className="w-5 h-5 mr-2 text-gray-500" />
                    <SelectValue placeholder="Price Range" />
                  </div>
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
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger className="w-full">
                  <div className="flex items-center">
                    <Bed className="w-5 h-5 mr-2 text-gray-500" />
                    <SelectValue placeholder="Bedrooms" />
                  </div>
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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleFilterChange}
                className="flex-grow bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Properties
              </Button>
              <Button
                onClick={handleClearFilters}
                variant="outline"
                className="flex-grow-0 border border-gray-300 text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <X className="w-5 h-5 mr-2" />
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
