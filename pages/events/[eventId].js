import { useRouter } from "next/router";
import React from "react";
import EventContent from "../../components/EventDetail/EventContent";
import EventLogistics from "../../components/EventDetail/EventLogistics";
import EventSummary from "../../components/EventDetail/EventSummary";
import { getEventById } from "../../dummy-data";

const EventDetailPage = () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics data={event.data} address={event.location} image={event.image} imageAlt={event.imageAlt} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
