import { notFound } from "next/navigation";

export default function RNC() {
  // Always return 404 for this route
  notFound();
  return null;
}
