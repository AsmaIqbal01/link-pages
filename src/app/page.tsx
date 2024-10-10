import React from "react";
import Image from "next/image";
import pic1 from "../../public/pic1.jpg";

export default function Home() {
  return (
    <main className="text-amber-950 text-2xl">
      <h1>Our aim is to provide you with high quality merchandise, bringing you the best products from various sources locally and internationally.</h1>
      <Image src={pic1} alt="A beautiful patio sofa set in a modern outdoor setting" width={400} height={200}/>
    </main>
  );
}
