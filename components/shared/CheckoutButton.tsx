"use client";

import React from "react";

import { IEvent } from "@/lib/database/models/event.model";

import Checkout from "./Checkout";

const CheckoutButton = ({
  event,
  userId,
}: {
  event: IEvent;
  userId: string;
}) => {
  const hasEventFinished = new Date(event?.endDateTime) < new Date();

  return (
    <div className="flex items-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">Event has expired</p>
      ) : (
        <>
          {/* <Button
            asChild
            className="button rounded-full"
            size="lg">
            <Link href="/sign-in">Get Tickets</Link>
          </Button> */}

          <Checkout
            event={event}
            userId={userId}
          />
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
