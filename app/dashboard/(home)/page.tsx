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
    <div>dashboard</div>
  );
}
