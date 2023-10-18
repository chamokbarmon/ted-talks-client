import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-sky-950">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-white lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-600  hover:bg-red-600 rounded-box w-52"
          >
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
              >
                HOME
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
              >
                WATCH
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
              >
                DESCOVER
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
              >
                ATTEND
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
              >
                PARTICIPATE
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                href="#"
                class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
              >
                SIGN IN
              </a>
            </li>
          </ul>
        </div>
        <Image
          src="https://i.ibb.co/2Mwh14P/png-transparent-social-ted-ted-talks-social-media-icon-1-removebg-preview.png"
          alt=""
          width={50}
          height={50}
        />
        <span class="font-bold text-red-600 text-2xl">TED TALKS</span>
        <span class="font-bold text-stone-300 text-sm mt-2 ml-2">
          Ideas worth spreading
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              href="#"
              class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
            >
              WATCH
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
            >
              DESCOVER
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
            >
              ATTEND
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
            >
              PARTICIPATE
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#"
              class="inline-flex items-center text-sm font-semibold text-white hover:text-red-500"
            >
              SIGN IN
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <button className="btn bg-red-600 ml-10 text-white p-2 rounded-md  hover:bg-blue-600">
          MEMBERSHIP
        </button>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
