import { useBooking } from "../context/BookingContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function CheckoutPage() {
  const { bookedProperties } = useBooking();

  const handleCheckout = () => {
    // Implement checkout logic here
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold my-8">Checkout</h1>
      <div className="grid grid-cols-1 gap-6 mb-8">
        {bookedProperties.map((property) => (
          <div key={property.id}>
            <h2 className="text-2xl font-semibold">{property.title}</h2>
            <p className="text-lg font-bold">${property.price}/night</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input label="Full Name" placeholder="Enter your full name" />
        <Input label="Email" placeholder="Enter your email" />
        <Input
          label="Credit Card"
          placeholder="Enter your credit card details"
        />
      </div>
      <Button variant="primary" className="mt-8" onClick={handleCheckout}>
        Complete Booking
      </Button>
    </div>
  );
}

export default CheckoutPage;
