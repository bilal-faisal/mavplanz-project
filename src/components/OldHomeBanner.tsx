import Link from "next/link";

const OldHomeBanner = () => {
  return (
    <div className="h-[90vh] bg-gradient-to-b md:bg-gradient-to-br from-blue-400 to-green-400 md:from-blue-500 md:to-green-500 flex items-center justify-center">
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-8 py-12 px-14 md:py-14 md:px-20 text-center bg-white bg-opacity-25 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
        <Link href={"/maverick_growth"}>
          <div className="my_btn">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-500 md:text-blue-500">
              Maverick Growth
            </h1>
          </div>
        </Link>
        <Link href={"/maverick_events"}>
          <div className="my_btn">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-500  md:text-green-600">
              Maverick Events
            </h1>
          </div>
        </Link>
        <Link href={"/maverick_cars"}>
          <div className="my_btn">
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 md:text-green-600">
              Maverick Cars
            </h1>
          </div>
        </Link>
        <Link href={"/maverick_travels"}>
          <div className="my_btn">
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 md:text-blue-500">
              Maverick Travels
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default OldHomeBanner;
