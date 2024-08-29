"use client";
import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }) {
  const [bookedProperties, setBookedProperties] = useState([]);

  const addPropertyToBooking = (property) => {
    setBookedProperties([...bookedProperties, property]);
  };

  const removePropertyFromBooking = (id) => {
    setBookedProperties(bookedProperties.filter((p) => p.id !== id));
  };

  return (
    <BookingContext.Provider
      value={{
        bookedProperties,
        addPropertyToBooking,
        removePropertyFromBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}
