"use client";
import { useState } from "react";

import PropertyCard from "../main/PropertyCard";
import PropertyFilter from "../main/PropertyFilter";

const dummyProperties = [
  {
    id: "1",
    title: "Cozy Cottage",
    price: 120,
    description: "A cozy cottage in the countryside.",
    image: "/images/property1.jpg",
    location: "Countryside",
    bedrooms: 2,
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: 200,
    description: "A modern apartment in the city.",
    image: "/images/property2.jpg",
    location: "City Center",
    bedrooms: 1,
  },
  {
    id: "3",
    title: "Beachfront Villa",
    price: 350,
    description: "A luxurious villa with a view of the beach.",
    image: "/images/property3.jpg",
    location: "Beachside",
    bedrooms: 4,
  },
  {
    id: "4",
    title: "Urban Loft",
    price: 250,
    description: "A stylish loft in the heart of the city.",
    image: "/images/property4.jpg",
    location: "Downtown",
    bedrooms: 2,
  },
  {
    id: "5",
    title: "Rustic Cabin",
    price: 150,
    description: "A rustic cabin in the mountains.",
    image: "/images/property5.jpg",
    location: "Mountain Range",
    bedrooms: 3,
  },
  {
    id: "6",
    title: "Luxury Penthouse",
    price: 500,
    description: "An upscale penthouse with panoramic city views.",
    image: "/images/property6.jpg",
    location: "Skyline",
    bedrooms: 3,
  },
  {
    id: "7",
    title: "Suburban Home",
    price: 180,
    description: "A family-friendly home in the suburbs.",
    image: "/images/property7.jpg",
    location: "Suburbia",
    bedrooms: 4,
  },
  {
    id: "8",
    title: "Charming Studio",
    price: 90,
    description: "A charming studio apartment in a quiet neighborhood.",
    image: "/images/property8.jpg",
    location: "Quiet Area",
    bedrooms: 1,
  },
  {
    id: "9",
    title: "Historical Mansion",
    price: 450,
    description: "A grand mansion with historical significance.",
    image: "/images/property9.jpg",
    location: "Historic District",
    bedrooms: 5,
  },
  {
    id: "10",
    title: "Contemporary Bungalow",
    price: 220,
    description: "A sleek bungalow with modern amenities.",
    image: "/images/property10.jpg",
    location: "Suburban",
    bedrooms: 2,
  },
  {
    id: "11",
    title: "Serene Lake House",
    price: 300,
    description: "A peaceful lake house with a private dock.",
    image: "/images/property11.jpg",
    location: "Lakefront",
    bedrooms: 3,
  },
  {
    id: "12",
    title: "Spacious Farmhouse",
    price: 280,
    description: "A spacious farmhouse with plenty of land.",
    image: "/images/property12.jpg",
    location: "Farmland",
    bedrooms: 4,
  },
];

export default function PropertiesPage() {
  const [filteredProperties, setFilteredProperties] = useState(dummyProperties);

  const handleFilterChange = (filters) => {
    const { location, priceRange, bedrooms } = filters;
    const [minPrice, maxPrice] = priceRange.split("-").map(Number);

    const filtered = dummyProperties.filter((property) => {
      const isLocationMatch = location
        ? property.location.toLowerCase().includes(location.toLowerCase())
        : true;
      const isPriceMatch =
        !priceRange ||
        (property.price >= minPrice && property.price <= maxPrice);
      const isBedroomsMatch = bedrooms
        ? property.bedrooms === Number(bedrooms)
        : true;
      return isLocationMatch && isPriceMatch && isBedroomsMatch;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="container mx-auto mt-8">
      <PropertyFilter onChange={handleFilterChange} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.length ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="col-span-full text-center">No properties found.</p>
        )}
      </div>
    </div>
  );
}
