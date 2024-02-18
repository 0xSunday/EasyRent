"use client";
import { getVehicleList } from "@/Services";
import FilterOptions from "@/components/FilterOptions";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import VehicleList from "@/components/VehicleList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [vehicles, setVehicles] = useState<any>([]);

  useEffect(() => {
    getVehicleList_();
  }, []);

  const getVehicleList_ = async () => {
    const result: any = await getVehicleList();
    setVehicles(result?.vehicleS);
  };
  console.log(vehicles);
  return (
    <main className="overflow-hidden ">
      <Hero />
      <SearchInput />
      <FilterOptions />
      <VehicleList vehicles={vehicles} />
    </main>
  );
}
