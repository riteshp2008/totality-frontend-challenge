"use client";
import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [bookedProperties, setBookedProperties] = useState([]);

  const addPropertyToBooking = (property) => {
    setBookedProperties([...bookedProperties, property]);
  };

  const removePropertyFromBooking = (propertyId) => {
    setBookedProperties(
      bookedProperties.filter((property) => property.id !== propertyId)
    );
  };

  const clearBooking = () => {
    setBookedProperties([]);
  };

  const value = {
    bookedProperties,
    addPropertyToBooking,
    removePropertyFromBooking,
    bookingCount: bookedProperties.length,
    clearBooking,
  };

  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
}
