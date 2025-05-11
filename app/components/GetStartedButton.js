"use client";

export default function GetStartedButton() {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('#our-blog').scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <a
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-20 sm:w-auto"
      href="#our-blog"
      onClick={handleClick}
    >
      GET STARTED
    </a>
  );
}
