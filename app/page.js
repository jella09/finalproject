import Link from "next/link";
import GetStartedButton from "./components/GetStartedButton";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-5 min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900">
      <header className="w-full">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#" className="flex items-center">
              <span className="mr-3 h-6 sm:h-9">Logo</span>
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                INFO SITE
              </span>
            </a>
            <div className="flex items-center lg:order-2">
              <a
                href="/login"
                className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
              >
                Sign Up
              </a>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414-1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/users"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Users
                  </Link>
                </li>
                <li>
                  <Link
                    href="/posts"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Posts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dashboard"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <a
                    href="/about"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
        <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center text-center bg-white dark:bg-gray-900">
        <div className="text-7xl font-bold pt-30">INFO SITE</div>
        <ul className="list-inside text-lg sm:text-l text-center sm:text-center font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            A platform to view user profiles, posts, comments, and<br />
            explore data through interactive ApexCharts visualizations. 
          </li>
        </ul>

        <div className="flex gap-4 items-center flex-col sm:flex-row justify-center mb-15">
          <GetStartedButton />
        </div>
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
              <h2 id="our-blog" className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white pt-20">CONTENTS</h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">The contents of this site includes users and their profile, posts with comments and data visualizations.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <Link href="/users" className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-transform transform hover:scale-105">
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-3">
                  Users
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">This contains the list of users and their background information.</p>
              </Link>
              <Link href="/posts" className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-transform transform hover:scale-105">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDaivwmfdFKZSk1vWGCN2RRoQh_NNMutGOkp4dL5qcSs5Mkk_IfjS8B4mDON3oz2snwvA&usqp=CAU"
                  alt="Posts"
                  className="w-full h-48 object-cover rounded-t-lg"
                  width={300}
                  height={200}
                />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-3">
                  Posts
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">This contains various posts with multiple comments.</p>
              </Link>
              <Link href="/dashboard" className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-transform transform hover:scale-105">
                <Image
                  src="https://img.freepik.com/premium-vector/blue-bar-graph-with-line-graph-it_698780-1072.jpg"
                  alt="Dashboard"
                  className="w-full h-48 object-cover rounded-t-lg"
                  width={300}
                  height={200}
                />
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-3">
                  Dashboard
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">This contains the data visualizations of the number of users, posts and comments.</p>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex items-center justify-center">
        <p className="text-center">All Rights Reserved. Info Site © 2025</p>
      </footer>
    </div>
  );
}
