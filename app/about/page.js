import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-5 min-h-screen pb-20 gap-16 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900">
      <header className="w-full">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 w-full">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                INFO SITE
              </span>
            </a>
            
            <div
              className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <Link
                    href="/"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"                  
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
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
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
        <section className="bg-white dark:bg-gray-900">
          <div className="py-2 px-2 mx-auto max-w-screen-xl lg:py-4 lg:px-4">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-6 mb-4">
              <h2 id="our-blog" className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">ABOUT US</h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">This contains information about the authors and their contribution</p>
            </div>
              <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                  <div className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a>
                          <img className="w-45 h-45 mx-auto pt-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                      </a>
                      <div className="p-5 text-center">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              <a>JELLA MAE CALUPIT</a>
                          </h3>
                          <span className="text-gray-500 dark:text-gray-400">Web Developer</span>
                          <ul className="flex justify-center space-x-4 sm:mt-0">
                              <li>
                                  <a href="https://www.facebook.com/jellaclpt" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.instagram.com/jlmclptbrnrdn" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.772.13 4.548.392 3.5 1.44 2.452 2.488 2.19 3.712 2.132 4.992.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.058 1.28.32 2.504 1.368 3.552 1.048 1.048 2.272 1.31 3.552 1.368 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.504-.32 3.552-1.368 1.048-1.048 1.31-2.272 1.368-3.552.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.32-2.504-1.368-3.552-1.048-1.048-2.272-1.31-3.552-1.368C15.668.014 15.244 0 12 0z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a>
                          <img className="w-45 h-45 mx-auto pt-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                      </a>
                      <div className="p-5 text-center">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              <a>SANDRINE GUELAS</a>
                          </h3>
                          <span className="text-gray-500 dark:text-gray-400">Web Designer</span>
                          <ul className="flex justify-center space-x-4 sm:mt-0">
                              <li>
                                  <a href="https://www.facebook.com/sandrine.guelas.05" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.instagram.com/gigei.bsy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.772.13 4.548.392 3.5 1.44 2.452 2.488 2.19 3.712 2.132 4.992.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.058 1.28.32 2.504 1.368 3.552 1.048 1.048 2.272 1.31 3.552 1.368 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.504-.32 3.552-1.368 1.048-1.048 1.31-2.272 1.368-3.552.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.32-2.504-1.368-3.552-1.048-1.048-2.272-1.31-3.552-1.368C15.668.014 15.244 0 12 0z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                  <div className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a>
                          <img className="w-45 h-45 mx-auto pt-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                      </a>
                      <div className="p-5 text-center">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              <a>JAMES WILSON BARTOLATA</a>
                          </h3>
                          <span className="text-gray-500 dark:text-gray-400">Troubleshooter</span>
                          <ul className="flex justify-center space-x-4 sm:mt-0">
                              <li>
                                  <a href="https://www.facebook.com/jameswilson.bartolata.1" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.instagram.com/jameswilsonbartolata" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.772.13 4.548.392 3.5 1.44 2.452 2.488 2.19 3.712 2.132 4.992.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.058 1.28.32 2.504 1.368 3.552 1.048 1.048 2.272 1.31 3.552 1.368 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.504-.32 3.552-1.368 1.048-1.048 1.31-2.272 1.368-3.552.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.32-2.504-1.368-3.552-1.048-1.048-2.272-1.31-3.552-1.368C15.668.014 15.244 0 12 0z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <a>
                          <img className="w-45 h-45 mx-auto pt-5" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" />
                      </a>
                      <div className="p-5 text-center">
                          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                              <a>CRISTIAN CATAMORA</a>
                          </h3>
                          <span className="text-gray-500 dark:text-gray-400">Website Tester</span>
                          <ul className="flex justify-center space-x-4 sm:mt-0">
                              <li>
                                  <a href="https://www.facebook.com/cristian.conda.catamora " className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                                  </a>
                              </li>
                              <li>
                                  <a href="https://www.instagram.com/cristiancatamora" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.772.13 4.548.392 3.5 1.44 2.452 2.488 2.19 3.712 2.132 4.992.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.058 1.28.32 2.504 1.368 3.552 1.048 1.048 2.272 1.31 3.552 1.368 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.504-.32 3.552-1.368 1.048-1.048 1.31-2.272 1.368-3.552.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.32-2.504-1.368-3.552-1.048-1.048-2.272-1.31-3.552-1.368C15.668.014 15.244 0 12 0z" /><path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" /></svg>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
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
