import React from "react";

const Project = () => {
  return (
    <>
      <h1 className="text-2xl text-center bg-violet-500/30 font-bold underline">Projects</h1>
      <div className="flex justify-around flex-wrap p-5 bg-violet-500/30">
        <div class="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Bazinga E-com
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              An E-commerce cart for online shopping , enhancing online shopping
              ease. Engineered user-friendly features for smooth navigation and
              secure transactions, showcasing proficiency in web development and
              project management
            </p>
          </div>
        </div>

        <div class="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Job Portal
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              An online application that allows companies and job seekers to
              discover available positions and applicants
            </p>
          </div>
        </div>

        <div class="max-w-sm my-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              class="rounded-t-lg"
              src="/docs/images/blog/image-1.jpg"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mobile-Tracking Application
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              navigate the missing and the current location of people who are
              connected with the user
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
