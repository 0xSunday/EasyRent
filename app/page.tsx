"use client";
import { getVehicleList } from "@/Services";
import FilterOptions from "@/components/FilterOptions";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import VehicleList from "@/components/VehicleList";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [originalVehicles, setOriginalVehicles] = useState<any>([]);
  const [vehicles, setVehicles] = useState<any>([]);
  const [order, setOrder] = useState<any>([]);

  useEffect(() => {
    getVehicleList_();
  }, []);

  const getVehicleList_ = async () => {
    const result: any = await getVehicleList();
    setVehicles(result?.vehicleS);
    setOriginalVehicles(result?.vehicleS);
  };

  const filteredVehicle = (brand: string) => {
    const filterList = originalVehicles.filter(
      (item: any) => item.vehicleType == brand
    );

    setVehicles(filterList);
  };
  const sortOrder = (value: any) => {
    const sortedData = [...originalVehicles].sort((a, b) =>
      value == -1 ? a.price - b.price : b.price - a.price
    );

    setVehicles(sortedData);
  };

  return (
    <main className="overflow-hidden ">
      <Hero />
      <SearchInput />
      <FilterOptions
        originalVehicles={originalVehicles}
        setVehicles={filteredVehicle}
        setOrder={sortOrder}
      />
      <VehicleList vehicles={vehicles} />
    </main>
  );
}
