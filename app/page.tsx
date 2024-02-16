import FilterOptions from "@/components/FilterOptions";
import Hero from "@/components/Hero";
import SearchInput from "@/components/SearchInput";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden ">
      <Hero />
      <SearchInput />
      <FilterOptions />
    </main>
  );
}
