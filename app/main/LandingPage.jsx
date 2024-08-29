import React from "react";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Home, Search, Key } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 animate-fade-in-down">
          Welcome to <span className="text-yellow-300">DreamStay</span>
        </h1>
        <p className="text-xl sm:text-2xl text-white mb-8 animate-fade-in-up">
          Find your perfect home away from home
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12 animate-fade-in">
          <SignedOut>
            <Link href="/sign-in">
              <Button
                variant="outline"
                className="w-full sm:w-auto text-lg bg-white text-purple-600 hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <Key className="mr-2" /> Sign In
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                variant="primary"
                className="w-full sm:w-auto text-lg bg-yellow-400 text-purple-800 hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <Home className="mr-2" /> Sign Up
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <Link href="/properties">
              <Button
                variant="primary"
                className="w-full sm:w-auto text-lg bg-yellow-400 text-purple-800 hover:bg-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                <Search className="mr-2" /> View Properties
              </Button>
            </Link>
          </SignedIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white animate-fade-in-up">
          {[
            {
              icon: Home,
              title: "Wide Selection",
              description: "Browse through thousands of properties",
            },
            {
              icon: Key,
              title: "Easy Booking",
              description: "Secure your stay with just a few clicks",
            },
            {
              icon: Search,
              title: "24/7 Support",
              description: "We're here to help anytime, anywhere",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-6 hover:bg-opacity-30 transition duration-300"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
