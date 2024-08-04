"use client";

import React from "react";
import { SearchParamProps } from "@/types";
import { useSession } from "@clerk/nextjs";

import  { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

const MyTickets = ({ searchParams }: SearchParamProps) => {
  const { isSignedIn } = useSession();
  const session = useSession();
  const userId = session?.session?.user?.id;
  console.log(userId, isSignedIn, "hdyd");

  const limit = 6;
  const page = Number(searchParams?.page) || 1;

  return (
    <div>
      {isSignedIn && isSignedIn ? (
        <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">My Tickets</h2>
          {userId && <div>All tickets</div>}
        </section>
      ) : (
        <section className="flex flex-col items-center mt-36 justify-center text-center my-8 gap-4">
          <h4>To view tickets click on signup</h4>
          <div className="w-60">
            <Button>
              {" "}
              <SignUpButton />
            </Button>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyTickets;
