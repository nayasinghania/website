import { DateType } from "@/lib/types";

export default function Dates({ date }: { date: DateType }) {
  return (
    <p className="text-xs">
      {date.start} – {date.end}
    </p>
  );
}
