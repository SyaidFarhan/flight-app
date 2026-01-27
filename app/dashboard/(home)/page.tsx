"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plane, MapPin, Calendar, Users, LogOut } from "lucide-react";
import { useState } from "react";

export default function DashboardPage() {
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [departDate, setDepartDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  const handleSearch = () => {
    console.log({
      from: fromCity,
      to: toCity,
      date: departDate,
      passengers,
    });
    // Add search logic here
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-500 to-blue-700">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Plane className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Flight Finder</h1>
          </div>
          <Button variant="outline" className="gap-2">
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="text-white mb-8">
          <h2 className="text-4xl font-bold mb-2">Welcome back!</h2>
          <p className="text-lg opacity-90">Find and book your next flight</p>
        </div>

        {/* Search Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">
            Search Flights
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* From City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                From
              </label>
              <Input
                type="text"
                placeholder="Departure city"
                value={fromCity}
                onChange={(e) => setFromCity(e.target.value)}
                className="w-full"
              />
            </div>

            {/* To City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                To
              </label>
              <Input
                type="text"
                placeholder="Arrival city"
                value={toCity}
                onChange={(e) => setToCity(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Date
              </label>
              <Input
                type="date"
                value={departDate}
                onChange={(e) => setDepartDate(e.target.value)}
                className="w-full"
              />
            </div>

            {/* Passengers */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="inline w-4 h-4 mr-1" />
                Passengers
              </label>
              <Input
                type="number"
                min="1"
                max="9"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          <Button
            onClick={handleSearch}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
          >
            Search Flights
          </Button>
        </div>

        {/* Recent Bookings / Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-gray-600 text-sm font-semibold mb-2">
              Total Bookings
            </h4>
            <p className="text-3xl font-bold text-gray-900">5</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-gray-600 text-sm font-semibold mb-2">
              Upcoming Flights
            </h4>
            <p className="text-3xl font-bold text-gray-900">2</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h4 className="text-gray-600 text-sm font-semibold mb-2">
              Miles Earned
            </h4>
            <p className="text-3xl font-bold text-gray-900">15,240</p>
          </div>
        </div>
      </main>
    </div>
  );
}
