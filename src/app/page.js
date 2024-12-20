"use client";

import Head from "next/head";
import { useEffect } from "react";
import MdTelegram, { MdExplicit } from "react-icons/md";
import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scroll",
        window.scrollY / (document.body.offsetHeight - window.innerHeight)
      );
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>John Wick's Dog ($DAISY)</title>
        <meta
          name="description"
          content="Discover the story of Daisy, the Beagle puppy that reignited John Wick's legendary path, and the love, grief, and bond we share with our beloved pets."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md py-4 transition-all">
        <div className="container mx-auto flex justify-between items-center px-8">
          <Image
            src={"/logo.jpg"}
            height={50}
            width={50}
            alt={"logo"}
            className="rounded-full"
          />
          {/* </div> */}
          <a
            href="#"
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            Get $DAISY
          </a>
        </div>
      </header>

      <main className="bg-gray-900 text-white pt-20">
        {/* Section 1: Hero Section */}
        <section
          className="h-screen flex items-center justify-center bg-cover bg-center relative"
          style={{ backgroundImage: "url(/bg.jpg)" }}
        >
          <div className="text-center max-w-4xl px-6 animate-fadeInUp">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-wide">
              John Wick's Dog
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              The story of love, loss, and the unbreakable bond with our
              four-legged best friends.
            </p>
            <a
              href="#story"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Discover The Story
            </a>
          </div>
        </section>

        {/* Section 2: The Gift of Daisy */}
        <section
          id="story"
          className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black py-20"
        >
          <div className="container mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                The Gift of Daisy
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                Daisy was a Beagle puppy given to the former hitman John Wick as
                a present from his late wife Helen. A symbol of love and
                healing, she helped John cope with the grief of his wife's
                passing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  A Healing Presence
                </h3>
                <p className="text-gray-300">
                  Daisy wasn’t just a pet. She was a symbol of resilience and
                  the bond we share with those who give us hope during difficult
                  times.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  A Symbol of Love
                </h3>
                <p className="text-gray-300">
                  Given as a last gift, Daisy became a reminder of unconditional
                  love and the healing power of companionship.
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition transform hover:scale-105">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  A New Beginning
                </h3>
                <p className="text-gray-300">
                  She was more than just a puppy. Daisy represented a fresh
                  start, a chance for John to find solace and rebuild his life.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a
                href="#"
                className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                Learn More About Daisy
              </a>
            </div>
          </div>
        </section>

        <section className=" py-10 flex justify-center  items-center bg-gradient-to-b from-gray-900 to-gray-800 relative">
          <div className="container mx-auto text-center max-w-4xl px-8 animate-fadeInUp">
            <div className="space-y-12 ">
              <div className="">
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
                  The Tragedy
                </h2>
                <p className="text-lg md:text-xl leading-relaxed opacity-90">
                  Daisy's tragic fate during a home invasion unleashed a fury in
                  John Wick that reignited his past career. The love he had for
                  Daisy fueled a relentless quest for justice.
                </p>
              </div>
              <img
                className="w-[500px] mx-auto object-cover rounded-lg shadow-lg"
                src="/dog.jpg"
                alt="Daisy"
              />
              <div>
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4">
                  Symbol of Love and Bond
                </h2>
                <p className="text-lg md:text-xl leading-relaxed opacity-90">
                  Daisy represents the love and bond we all share with our
                  beloved four-legged best friends. Her story reminds us that
                  love and loyalty go beyond words.
                </p>
              </div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-72 h-72 bg-yellow-500 rounded-full blur-xl opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="h-screen flex items-center bg-gray-900 relative">
          <div className="container mx-auto max-w-5xl text-center animate-fadeInUp">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-6">
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-90">
              Honor Daisy's legacy and celebrate the love for our pets with
              $DAISY. Be a part of a community that cherishes loyalty, love, and
              friendship.
            </p>
            <a
              href="#"
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition"
            >
              Get Started
            </a>
            <div className="flex justify-center items-center w-full gap-4 mt-8">
              <a
                href="#"
                className="bg-yellow-500 p-4 w-fit rounded-lg hover:opacity-90 transition"
              >
                <FaTelegramPlane />
              </a>
              <a
                href="#"
                className="bg-yellow-500 p-4 w-fit rounded-lg hover:opacity-90 transition"
              >
                <i className="fab fa-twitter text-black text-2xl"></i>
                <BsTwitterX />
              </a>
              <a
                href="#"
                className="bg-yellow-500 p-4 w-fit rounded-lg hover:opacity-90 transition"
              >
                <FaInstagram />
                <i className="fab fa-instagram text-black text-2xl"></i>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
