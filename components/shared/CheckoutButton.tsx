"use client";

import Link from "next/link";
import React from "react";

import { IEvent } from "@/lib/database/models/event.model";

import { Button } from "../ui/button";
import Checkout from "./Checkout";

const CheckoutButton = ({ event }: { event: IEvent }) => {
  const hasEventFinished = new Date(event?.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
           Event is free.
        </p>
      ) : (
        <>
          <Button
            asChild
            className="button rounded-full"
            size="lg">
            <Link href="/sign-in">Get Tickets</Link>
          </Button>

          <Checkout
            event={event}
            userId={""}
          />
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
