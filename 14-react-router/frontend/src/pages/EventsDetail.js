import { useParams } from "react-router-dom";

function EventsDetail() {
  const params = useParams();

  return (
    <>
      <h1>Events Detail Page</h1>
      <p>{params.eventId}</p>
    </>
  );
}

export default EventsDetail;
