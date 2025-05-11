"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const fetchUserPosts = async (userId) => {
    try {
      const postsResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
      const posts = await postsResponse.json();

      const userPosts = posts.filter((post) => post.userId === userId);

      return userPosts;
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  };

  const fetchPostComments = async (postId) => {
    try {
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
      const comments = await commentsResponse.json();
      return comments;
    } catch (error) {
      console.error("Error fetching comments:", error);
      return [];
    }
  };

  const togglePostComments = async (postId) => {
    setSelectedUser((prevUser) => {
      const updatedPosts = prevUser.posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            showComments: !post.showComments,
            comments: post.comments || [],
          };
        }
        return post;
      });
      return { ...prevUser, posts: updatedPosts };
    });

    const post = selectedUser.posts.find((post) => post.id === postId);
    if (!post.comments) {
      const comments = await fetchPostComments(postId);
      setSelectedUser((prevUser) => {
        const updatedPosts = prevUser.posts.map((post) => {
          if (post.id === postId) {
            return { ...post, comments };
          }
          return post;
        });
        return { ...prevUser, posts: updatedPosts };
      });
    }
  };

  const openPopup = async (user) => {
    const userPosts = await fetchUserPosts(user.id);
    setSelectedUser({ ...user, posts: userPosts });
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setSelectedUser(null);
    setIsPopupVisible(false);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center pt-5 min-h-screen pb-40 gap-16 font-[family-name:var(--font-geist-sans)] bg-white dark:bg-gray-900">
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
                    href="#"
                    className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                    aria-current="page"
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
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-center text-left bg-white dark:bg-gray-900">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-2 px-2 mx-auto max-w-screen-xl lg:py-4 lg:px-4">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-6 mb-4">
              <h2 id="our-blog" className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">LIST OF USERS</h2>
              <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">name, username and email address</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {users.map((user) => (
                <div
                  key={user.id}
                  className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
                  onClick={() => openPopup(user)}
                >
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white pt-3">
                    {user.name}
                  </h2>
                  <p className="mb-1 font-light text-gray-500 dark:text-gray-400">@{user.username}</p>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{user.email}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
     
      {isPopupVisible && (
        <div id="info-popup" tabIndex="-1" className="fixed top-0 right-0 left-0 z-50 w-full h-modal md:h-full overflow-y-auto overflow-x-hidden flex items-center justify-center">
          <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative p-4 bg-white rounded-lg shadow border border-gray-300 md:p-8 overflow-y-auto max-h-[80vh]">
              <div className="mb-4 text-sm font-light text-gray-700">
                <h3 className="mb-3 text-2xl font-bold text-gray-900">User Info</h3>
                {selectedUser && (
                  <div>
                    <p>
                      <span className="font-bold">Name:</span> {selectedUser.name}
                      <br />
                      <span className="font-bold">Username:</span> {selectedUser.username}
                      <br />
                      <span className="font-bold">Email:</span> {selectedUser.email}
                      <br />
                      <span className="font-bold">Phone:</span> {selectedUser.phone}
                      <br />
                      <span className="font-bold">Website:</span> <a href={`http://${selectedUser.website}`} target="_blank" rel="noopener noreferrer">{selectedUser.website}</a>
                      <br />
                      <span className="font-bold">Address:</span> {`${selectedUser.address.street}, ${selectedUser.address.suite}, ${selectedUser.address.city}, ${selectedUser.address.zipcode}`}
                      <br />
                      <span className="font-bold">Latitude:</span> {selectedUser.address.geo.lat}
                      <br />
                      <span className="font-bold">Longitude:</span> {selectedUser.address.geo.lng}
                    </p>
                    <iframe
                      src={`https://www.google.com/maps?q=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}&output=embed`}
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                      <h4 className="text-lg font-bold">Company</h4>
                      <p>
                        <strong>Name:</strong> {selectedUser.company.name}
                        <br />
                        <strong>Catchphrase:</strong> {selectedUser.company.catchPhrase}
                        <br />
                        <strong>BS:</strong> {selectedUser.company.bs}
                      </p>
                    </div>
                    <br />
                    <h3 className="mb-3 text-2xl font-bold text-gray-900">Posts</h3>
                    <div className="grid gap-4">
                      {selectedUser.posts.map((post) => (
                        <div
                          key={post.id}
                          className="p-4 bg-white rounded-lg border border-gray-200 shadow-md cursor-pointer"
                          onClick={() => togglePostComments(post.id)}
                        >
                          <h5 className="text-md font-bold text-gray-900">
                            {post.title}
                          </h5>
                          <p className="text-sm text-gray-700">{post.body}</p>
                          {post.showComments && (
                            <div className="mt-2">
                              <h6 className="text-sm font-bold text-gray-800">Comments:</h6>
                              <div className="grid gap-4 mt-2">
                                {post.comments.map((comment) => (
                                  <div key={comment.id} className="p-4 bg-gray-100 rounded-lg border border-gray-200 shadow-md">
                                    <h6 className="text-sm font-bold text-gray-900">
                                      {comment.name} ({comment.email})
                                    </h6>
                                    <p className="text-sm text-gray-700 mt-2">{comment.body}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                <button
                  id="close-modal"
                  type="button"
                  onClick={closePopup}
                  className="py-2 px-4 w-full text-sm font-medium text-white bg-blue-500 rounded-lg border border-blue-500 sm:w-auto hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 hover:text-white focus:z-10"
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

