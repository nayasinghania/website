import Image from "next/image";

export default function Portrait() {
  return (
    <Image
      src="/portrait.jpg"
      width={128}
      height={128}
      alt="portrait of naya singhania"
      className="rounded-md border border-primary/30 shadow-lg h-20 w-20 lg:h-32 lg:w-32"
    />
  );
}
