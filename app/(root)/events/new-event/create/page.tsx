"use client";

import EventForm from "@/components/shared/EventForm";
import { useSession } from "@clerk/nextjs";

const CreateEvent = () => {
  const session = useSession();
  console.log(session.session?.user.id, 'session');

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left">
          Create Event
        </h3>
      </section>

      <div className="wrapper my-8">
        <EventForm
          clerkId={session.session?.user.id ?? ""}
          type="Create"
        />
      </div>
    </>
  );
};

export default CreateEvent;


