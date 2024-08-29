import { withAuth } from "@clerk/nextjs";
import { useBooking } from "../context/BookingContext";

import { Button } from "@/components/ui/button";
import PropertyCard from "../main/PropertyCard";

function cart() {
  const { bookedProperties, removePropertyFromBooking } = useBooking();

  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-8">Your Cart</h1>
      {bookedProperties.length === 0 ? (
        <p>No properties booked yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {bookedProperties.map((property) => (
            <div
              key={property.id}
              className="flex items-center justify-between"
            >
              <PropertyCard property={property} />
              <Button
                variant="danger"
                onClick={() => removePropertyFromBooking(property.id)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default withAuth(cart);
