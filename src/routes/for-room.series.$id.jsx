import { createFileRoute, } from "@tanstack/react-router";
import { Series } from "../components/Series";

export const Route = createFileRoute("/for-room/series/$id")({
  component: SeriesComp,
});

function SeriesComp() {
  const { id } = Route.useParams();
  console.log(id);
  return <Series location="room" id={+id} />;
}
