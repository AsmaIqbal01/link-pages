'use client';
import Image from "next/image";
import pic1 from "../../public/errorpic.jpg";

export default function NotFoundPage() {
  return (
    <main className="text-center">
      <Image
        src={pic1}
        alt="Error"
        fill
        priority
        onError={(event) => {
          console.error("Error loading image:", event);
        }}
      />
    </main>
  );
}

