"use client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="w-full h-full bg-black">
      <Hero handle={handleClick} />
      <Grid refe={ref} />
    </main>
  );
}
