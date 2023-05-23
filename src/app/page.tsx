import Link from "next/link";

export const metadata = {
  title: "Mavplanz - Home",
  description: "Mavplanz home page",
};

const Home = () => {
  return (
    <div>
      <div className="h-[90vh] bg-gradient-to-b md:bg-gradient-to-br from-blue-400 to-green-400 md:from-blue-500 md:to-green-500 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-8 py-12 px-14 md:py-14 md:px-20 text-center bg-white bg-opacity-25 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
          <Link href={"/maverick_growth"}>
            <div className="my_btn">
              <h1 className="text-3xl md:text-4xl font-bold text-sky-600 md:text-sky-600">
                Maverick Growth
              </h1>
            </div>
          </Link>
          <Link href={"/maverick_events"}>
            <div className="my_btn">
              <h1 className="text-3xl md:text-4xl font-bold text-sky-600  md:text-green-600">
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
              <h1 className="text-3xl md:text-4xl font-bold text-green-600 md:text-sky-600">
                Maverick Travels
              </h1>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="min-h-screen bg-gradient-to-b md:bg-gradient-to-br from-blue-400 to-green-400 md:from-blue-500 md:to-green-500 flex items-center justify-center">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-8 gap-x-12 py-12 px-14 md:py-14 md:px-20 text-center bg-white bg-opacity-25 rounded-xl shadow-lg backdrop-filter backdrop-blur-lg">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-sky-600 md:text-sky-600">
              Maverick Growth
            </h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-sky-600  md:text-green-600">
              Maverick Events
            </h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 md:text-green-600">
              Maverick Cars
            </h1>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-green-600 md:text-sky-600">
              Maverick Travels
            </h1>
          </div>
        </div>
      </div> */}

      {/* <div className="min-h-screen bg-gradient-to-br from-blue-500 to-green-500 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16 bg-white rounded-lg shadow-lg text-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-purple-500">
              Maverick Growth
            </h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-blue-500">
              Maverick Events
            </h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-green-500">
              Maverick Cars
            </h1>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-red-500">
              Maverick Travels
            </h1>
          </div>
        </div>
      </div> */}

      {/* <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16 bg-white rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-purple-500 mb-4">
              Maverick Growth
            </h1>
            <p className="text-purple-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-blue-500 mb-4">
              Maverick Events
            </h1>
            <p className="text-blue-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-green-500 mb-4">
              Maverick Cars
            </h1>
            <p className="text-green-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500 mb-4">
              Maverick Travels
            </h1>
            <p className="text-red-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
