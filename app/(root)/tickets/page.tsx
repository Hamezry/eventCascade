import { getOrdersByUser } from "@/lib/actions/order.actions";
import { currentUser } from "@clerk/nextjs/server";

export default async function MyTickets({
  searchParams,
}: {
  searchParams: URLSearchParams;
}) {
  const user = await currentUser();

  if (user) {
    const tickets = await getOrdersByUser({
      userId: user.publicMetadata.userId as string,
      limit: 10,
      page: 1,
    });

    /**
     * You can get tickets from {tickets.data}
     *
     */
    return (
      <div className="py-5 md:py-10">User Tickets ({tickets?.data.length})</div>
    );
  }

  return <div>No tickets</div>;
}
