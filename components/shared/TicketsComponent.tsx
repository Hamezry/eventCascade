// components/TicketList.tsx

import React, { useEffect, useState } from "react";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import Collection from "@/components/shared/Collection";


interface TicketListProps {
  userId: string;
  limit: number;
  page: number;
}

const TicketList: React.FC<TicketListProps> = ({ userId, limit, page }) => {
  const [tickets, setTickets] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      setLoading(true);
      try {
        const response = await getOrdersByUser({ userId, limit, page });
        setTickets(response);
      } catch (error) {
        console.error("Failed to fetch tickets", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [userId, limit, page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Collection
      data={tickets?.data}
      emptyTitle="No Events Found"
      emptyStateSubtext="Come back later"
      collectionType="All_Events"
      limit={limit}
      page={page}
      totalPages={tickets?.totalPages}
    />
  );
};

export default TicketList;

