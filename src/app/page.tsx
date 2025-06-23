import { Handshake } from "lucide-react";
import HeroBanner from "@/components/hero-banner";

export default function Home() {
  return (
    <article className="flex flex-col justify-between h-full">
      <section>
        <nav className="flex justify-between p-4">
          <div className="flex gap-2">
            <Handshake />
            <p className="font-bold">JOB ADJUSTER</p>
          </div>
        </nav>
        <HeroBanner />
      </section>
      <footer className="w-full text-center p-4 text-sm text-gray-500 mb-0">
        © {new Date().getFullYear()} Job Adjuster. All rights reserved.
      </footer>
    </article>
  );
}
