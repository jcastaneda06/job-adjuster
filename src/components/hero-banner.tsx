"use client";
import { FC, useEffect } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";

const HeroBanner: FC = () => {
  const router = useRouter();

  useEffect(() => {
    gsap.to(".hero-image", {
      opacity: 1,
      duration: 1,
    });

    gsap.to(".hero-image", {
      y: 0,
      repeat: -1,
      yoyo: true,
      yoyoEase: true,
      ease: "sine.inOut",
      duration: 1.3,
    });

    gsap.to(".hero-text", {
      opacity: 1,
      duration: 1,
      delay: 0.2,
      y: 0,
      yoyo: true,
    });
  }, []);
  return (
    <main className="flex flex-col items-center  md:mt-[100px] p-4">
      <header className="flex md:flex-row flex-col  gap-8">
        <Image
          className="hero-image opacity-0 translate-y-[-25px] md:block"
          src="/assets/img/resume_screening.svg"
          alt=""
          width={500}
          height={0}
        />
        <div className="hero-text text-end flex flex-col justify-center gap-4 opacity-0 translate-y-[-25px]">
          <div>
            <h1 className="text-4xl font-bold">
              Adjust your resume to any job!
            </h1>
            <p className="text-2xl">(In just one click!)</p>
          </div>
          <div>
            <Button
              className="cursor-pointer"
              onClick={() => router.push("/adjust")}
            >
              Start now!
            </Button>
          </div>
        </div>
      </header>
    </main>
  );
};

export default HeroBanner;
