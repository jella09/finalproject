"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const openPopup = (postId) => {
    const post = posts.find((p) => p.id === postId);
    setSelectedPost(post);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedPost(null);
    setComments([]);
    setIsPopupVisible(false);
  };

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
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
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
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center text-left bg-white dark:bg-gray-900">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-2 px-2 mx-auto max-w-screen-xl lg:py-4 lg:px-4">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-6 mb-4">
              <h2 id="our-blog" className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">LIST OF POSTS</h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">posts and comments</p>
            </div>
            <div className="grid gap-5 lg:grid-cols-1">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => openPopup(post.id)}
                >
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-3">
                    {post.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* Popup */}
      {isPopupVisible && (
        <div id="info-popup" tabIndex="-1" className="fixed inset-0 z-50 w-full h-full flex items-center justify-center p-8 pt-30">
          <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-lg shadow border border-gray-300 overflow-hidden">
            <div className="relative p-4 md:p-8 h-full overflow-y-auto">
              <div className="mb-4 text-sm font-light text-gray-700">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">Post Details</h3>
                {selectedPost && (
                  <div>
                    <p className="text-lg font-bold">{selectedPost.title}</p>
                    <p className="text-sm text-gray-600 mt-2">{selectedPost.body}</p>
                  </div>
                )}
                <h4 className="mt-4 text-xl font-bold text-blue-600 underline">
                  Comments ({comments.length})
                </h4>
                <div className="mt-4 space-y-4">
                  {comments.map((comment) => (
                    <div key={comment.id} className="p-4 bg-gray-100 rounded-lg border border-gray-300">
                      <p className="font-bold">
                        {comment.name} <span className="font-normal text-gray-600">({comment.email})</span>
                      </p>
                      <p className="mt-2 text-gray-700">{comment.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                <button
                  id="close-modal"
                  type="button"
                  onClick={closePopup}
                  className="py-2 px-4 w-full text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-600 sm:w-auto hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 focus:z-10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <footer className="row-start-3 flex items-center justify-center">
        <p className="text-center">All Rights Reserved. Info Site © 2025</p>
      </footer>
    </div>
  );
}
