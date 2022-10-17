import Head from "next/head";
import { ArrowRightIcon, EyeIcon, ChatIcon } from "@heroicons/react/outline";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-20 text-center">
        <div className="text-4xl  font-extrabold text-gray-700 mb-10">
          Welcome to MN!
        </div>
        
      </div>

      {/* 카드 전체를 반응형으로 만들기 위한 컨테이너 */}
      <div className="p-4 sm:w-1/2 lg:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-72 md:h-48 w-full object-cover object-center"
            src="https://picsum.photos/id/188/720/400/"
            alt="card image"
          />
          <div className="p-6 hover:bg-indigo-600 hover:text-white
                         transition duration-300 ease-in">
            
            <h2 className="text-base font-medium text-indigo-300 mb-1">
              Oct 17, 2022
            </h2>
            <h1 className="text-2xl font-semibold mb-3">타이틀</h1>
            <p className="leading-relaxed mb-3">
              연습용 홈화면 카드
            </p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                Read More
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <EyeIcon className="w-4 h-4 mr-1" />
                1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <ChatIcon className="w-4 h-4 mr-1" />6
              </span>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}