export default function Title() {
  return (
    <div>
      <div className="fixed bg-black w-full py-4 z-10">
        <h1 className="bg-linear-to-r from-blue-500 via-purple-500 to-purple-500 bg-clip-text text-transparent pb-2 max-w-xl">
          Naya Singhania
        </h1>
        <h2 className="hidden lg:block">
          Computer Science @ San Jose State University ~ Software Engineer
          Specializing in Applied AI/ML
        </h2>
        <h2 className="hidden md:block lg:hidden">
          Computer Science @ San Jose State University
        </h2>
        <h2 className="hidden md:block lg:hidden">
          Software Engineer Specializing in Applied AI/ML
        </h2>
        <h2 className="block md:hidden">Computer Science @ SJSU</h2>
        <h2 className="block md:hidden">SWE | Applied AI/ML</h2>
      </div>
      <div className="h-36 lg:h-28 mb-4"></div>
    </div>
  );
}
