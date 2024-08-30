"use client";
import { useState } from "react";

import PropertyCard from "../main/PropertyCard";
import PropertyFilter from "../main/PropertyFilter";

const dummyProperties = [
  {
    id: "1",
    title: "Cozy Cottage",
    price: 1200,
    description: "A cozy cottage in the countryside.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4maOLmd8Sshx6_FpsBWm8W9lwvYjKOCMNRw&s",
    location: "Countryside",
    bedrooms: 2,
  },
  {
    id: "2",
    title: "Modern Apartment",
    price: 2000,
    description: "A modern apartment in the city.",
    image:
      "https://media.istockphoto.com/id/1165384568/photo/europe-modern-complex-of-residential-buildings.jpg?s=612x612&w=0&k=20&c=iW4NBiMPKEuvaA7h8wIsPHikhS64eR-5EVPfjQ9GPOA=",
    location: "City Center",
    bedrooms: 1,
  },
  {
    id: "3",
    title: "Beachfront Villa",
    price: 3500,
    description: "A luxurious villa with a view of the beach.",
    image:
      "https://www.aleenta.com/wp-content/uploads/2022/03/Natai_Beach_Villas.png",
    location: "Beachside",
    bedrooms: 4,
  },
  {
    id: "4",
    title: "Urban Loft",
    price: 2500,
    description: "A stylish loft in the heart of the city.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRsPVUCfuB1b3jq8QR4N_YVJovSyTB-0v9-g&s",
    location: "Downtown",
    bedrooms: 2,
  },
  {
    id: "5",
    title: "Rustic Cabin",
    price: 1500,
    description: "A rustic cabin in the mountains.",
    image:
      "https://img1.wsimg.com/isteam/ip/82ff9b14-84aa-42e2-9cf9-1462022382fa/c61326a991d4ebc4591a31ff0e30d60f9c6ed17c5e98c.jpeg",
    location: "Mountain Range",
    bedrooms: 3,
  },
  {
    id: "6",
    title: "Luxury Penthouse",
    price: 5000,
    description: "An upscale penthouse with panoramic city views.",
    image:
      "https://www.arabianbusiness.com/cloud/2023/12/07/Como-Residences-Penthouse-Nakheel-3.jpg",
    location: "Skyline",
    bedrooms: 3,
  },
  {
    id: "7",
    title: "Suburban Home",
    price: 1800,
    description: "A family-friendly home in the suburbs.",
    image:
      "https://media.istockphoto.com/id/1436217023/photo/exterior-of-a-blue-suburban-home.jpg?s=612x612&w=0&k=20&c=6n08rcEdza9Vehf5cHzk1uS0UKAN0qr3o884mbDvD5o=",
    location: "Suburbia",
    bedrooms: 4,
  },
  {
    id: "8",
    title: "Charming Studio",
    price: 900,
    description: "A charming studio apartment in a quiet neighborhood.",
    image:
      "https://www.dailydreamdecor.com/wp-content/uploads/2017/02/charming-studio-apartment1-800x533.jpg",
    location: "Quiet Area",
    bedrooms: 1,
  },
  {
    id: "9",
    title: "Historical Mansion",
    price: 4500,
    description: "A grand mansion with historical significance.",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/10/01/f3/fb/eustis-estate-museum.jpg",
    location: "Historic District",
    bedrooms: 5,
  },
  {
    id: "10",
    title: "Contemporary Bungalow",
    price: 2200,
    description: "A sleek bungalow with modern amenities.",
    image:
      "https://img.staticmb.com/mbcontent/images/uploads/2022/5/Mid-Century%20Modern%20Bungalow%20Design.jpg",
    location: "Suburban",
    bedrooms: 2,
  },
  {
    id: "11",
    title: "Serene Lake House",
    price: 3000,
    description: "A peaceful lake house with a private dock.",
    image:
      "https://img.freepik.com/premium-photo/serene-lake-house-with-panoramic-views-open-living-spacesupk-hd_1258-242989.jpg",
    location: "Lakefront",
    bedrooms: 3,
  },
  {
    id: "12",
    title: "Spacious Farmhouse",
    price: 2800,
    description: "A spacious farmhouse with plenty of land.",
    image:
      "https://media.vrbo.com/lodging/92000000/91300000/91297800/91297767/d905e756.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill",
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
