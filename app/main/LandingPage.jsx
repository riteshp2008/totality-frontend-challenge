import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Search,
  Calendar,
  Star,
  MessageSquare,
  Key,
  HomeIcon,
  Clock,
  Shield,
} from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full py-32 md:py-48 lg:py-64 overflow-hidden">
          <div
            className="absolute inset-0 z-0 transition-transform duration-1000 ease-in-out transform scale-105 animate-ken-burns"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
          <div className="container px-4 md:px-6 relative z-20">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 animate-fade-in-up">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg">
                  Find Your Perfect Stay
                </h1>
                <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-white/90 drop-shadow">
                  Explore and book exceptional homes, apartments, and
                  experiences worldwide.
                </p>
              </div>
              <SignedOut>
                <div
                  className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Link href="/sign-in">
                    <Button
                      variant="outline"
                      className="w-full sm:w-auto text-lg bg-white text-black transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-opacity-90 hover:shadow-lg flex items-center justify-center rounded-full px-8 py-3"
                    >
                      <Key className="mr-2 h-5 w-5" /> Sign In
                    </Button>
                  </Link>
                  <Link href="/sign-up">
                    <Button
                      variant="primary"
                      className="w-full sm:w-auto text-lg bg-blue-500 text-white border-2 border-blue-500 transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg flex items-center justify-center rounded-full px-8 py-3"
                    >
                      <HomeIcon className="mr-2 h-5 w-5" /> Sign Up
                    </Button>
                  </Link>
                </div>
              </SignedOut>
              <SignedIn>
                <div
                  className="w-full max-w-md space-y-4 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <p className="text-lg text-white">Welcome back!</p>
                </div>
              </SignedIn>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Why Choose DreamStay?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <HomeIcon className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle>Personalized Experiences</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Discover homes tailored to your preferences with our
                    personalized recommendations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle>24/7 Customer Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Get assistance anytime with our dedicated 24/7 customer
                    support team.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle>Secure Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Book with confidence knowing that your transactions are
                    securely processed.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  step: 1,
                  title: "Explore",
                  description:
                    "Browse through a wide selection of properties and experiences.",
                },
                {
                  step: 2,
                  title: "Book",
                  description:
                    "Select your desired stay and complete the booking process effortlessly.",
                },
                {
                  step: 3,
                  title: "Enjoy",
                  description:
                    "Arrive and enjoy your stay with everything you need at your fingertips.",
                },
              ].map((item) => (
                <Card key={item.step}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mb-4">
                      {item.step}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Testimonials
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah M.",
                  text: "Our vacation was unforgettable, thanks to the amazing options and ease of use. Highly recommend!",
                },
                {
                  name: "John D.",
                  text: "An excellent platform for finding unique stays. It's our go-to for every trip!",
                },
                {
                  name: "Emily R.",
                  text: "Fantastic service with a wide range of choices. DreamStay is our favorite travel companion!",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="bg-gray-100">
                  <CardHeader>
                    <MessageSquare className="h-12 w-12 text-blue-500 mb-4" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{testimonial.text}</p>
                    <p className="font-bold">- {testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex py-6 w-full shrink-0 bg-gray-800 text-center justify-center items-center px-4 md:px-6 border-t">
        <p className="text-sm text-gray-400 text-center">
          © 2024 DreamStay Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
