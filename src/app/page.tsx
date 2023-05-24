import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Mavplanz - Home",
  description: "Mavplanz home page",
};

const Home = () => {
  return (
    <div>
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
      <div className="flex bg-gray-100 px-5 md:px-14 pt-16 pb-6">
        <div className="space-y-6">
          <ul className="space-y-4 text-xl">
            <li className="flex">
              <div className="text-blue-500 font-bold text-4xl ">•</div>
              <div className="pl-3 mt-2">
                Planning To Go Into Business Or Grow It?
              </div>
            </li>
            <li className="flex md:ml-8">
              <div className="text-blue-500 font-bold text-4xl ">•</div>
              <div className="pl-3 mt-2">
                Need Help With Your Existing Processes?
              </div>
            </li>
            <li className="flex md:ml-16">
              <div className="text-blue-500 font-bold text-4xl ">•</div>
              <div className="pl-3 mt-2">
                Want Better Placement Than The Competition?
              </div>
            </li>
          </ul>
          <div className="p-4 rounded-lg ">
            <p className="text-2xl leading-10">
              <span className="bg-blue-500 text-white py-2 px-4 rounded-lg font-bold">
                MavPlanz
              </span>
              <span className="pl-2">
                Is Here To Help You Achieve Brilliance In Any & All Of The Above
                Scenarios.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-center p-6 mx-auto w-full md:px-28 pb-32">
        <div className="bg-gray-50 py-10 rounded-2xl shadow-2xl mx-2 md:mx-0">
          <h2 className="text-4xl mb-10 font-semibold text-green-600 px-4">
            MavPlanz Provides You With 
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mx-auto w-full px-10">
            <div className="py-3">
              <Image src={"/idea.png"} width={70} height={70} alt="Logo" className="mx-auto mb-5"/>
              <div className="my_btn1">
                <h3 className="text-2xl font-bold text-blue-500">
                  Apt Strategies
                </h3>
              </div>
            </div>
            <div className="py-3">
              <Image src={"/planning.png"} width={70} height={70} alt="Logo" className="mx-auto mb-5"/>
              <div className="my_btn1">
                <h3 className="text-2xl font-bold text-blue-500">
                  Savvy Techniques
                </h3>
              </div>
            </div>
            <div className="py-3">
              <Image src={"/bar-chart.png"} width={70} height={70} alt="Logo" className="mx-auto mb-5"/>
              <div className="my_btn1">
                <h3 className="text-2xl font-bold text-blue-500">
                  Modern Tools
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
