"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MessageSquare,
  Key,
  HomeIcon,
  Clock,
  Shield,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { GlobeMain } from "./globeMain";
import { dummyProperties } from "../properties/page";
import PropertyCard from "./PropertyCard";

export default function Component() {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <GlobeMain />

        <section className="w-full py-8 md:py-16 lg:py-20 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">
              Explore Our Properties
            </h2>
            <div className="relative">
              <Button
                variant="outline"
                size="icon"
                className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {dummyProperties.slice(0, 4).map((property, index) => (
                  <div key={index} className="snap-start flex-shrink-0">
                    <PropertyCard property={property} />
                  </div>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md hover:bg-gray-100"
                onClick={() => scroll("right")}
                aria-label="Scroll right"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="flex justify-center mt-8">
                <SignedIn>
                  <Link href="/properties">
                    <Button variant="outline">View More</Button>
                  </Link>
                </SignedIn>
                <SignedOut>
                  <Link href="/sign-up">
                    <Button variant="outline">View More</Button>
                  </Link>
                </SignedOut>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-8 md:py-16 lg:py-20 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose DreamStay?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: HomeIcon,
                  title: "Personalized Experiences",
                  description:
                    "Discover homes tailored to your preferences with our personalized recommendations.",
                },
                {
                  icon: Clock,
                  title: "24/7 Customer Support",
                  description:
                    "Get assistance anytime with our dedicated 24/7 customer support team.",
                },
                {
                  icon: Shield,
                  title: "Secure Transactions",
                  description:
                    "Book with confidence knowing that your transactions are securely processed.",
                },
              ].map((feature, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-indigo-600 mb-4" />
                    <CardTitle className="text-xl font-semibold">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
