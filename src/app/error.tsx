"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <>
      <section className="py-10 px-5 flex flex-wrap justify-center items-center text-center">
        <div className="space-y-4">
          <h1>Some Error occured</h1>
          <Link href={"/"}>
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
