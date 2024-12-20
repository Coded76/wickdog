import Head from "next/head";
import Image from "next/image";

export default function Home() {
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

      <header className="bg-gray-900 py-4 fixed top-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-white font-bold text-2xl">
            <Image
              src={"/logo.jpg"}
              height={50}
              width={50}
              className="rounded-full"
            />
          </div>
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
          className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url(/bg.jpg)" }}
        >
          <div className="text-center text-black max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              John Wick's Dog
            </h1>
            <p className="text-lg md:text-2xl text-white mb-8">
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
          className="h-screen flex items-center justify-center bg-gray-800"
        >
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">
                The Gift of Daisy
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-8">
                Daisy was a Beagle puppy given to the former hitman John Wick as
                a present from his late wife Helen shortly after her death. A
                symbol of love and healing, Daisy was meant to help John cope
                with the grief of his wife's passing.
              </p>
              <a
                href="#"
                className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                Learn More
              </a>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/dog.jpg"
                alt="Daisy the Beagle Puppy"
                className="rounded-xl shadow-lg max-w-full md:max-w-md"
              />
            </div>
          </div>
        </section>

        {/* Section 3: The Tragedy */}
        <section className="h-screen flex items-center justify-center bg-gray-900">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">The Tragedy</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Daisy's tragic fate during a home invasion unleashed a fury in
              John Wick that reignited his past career. The love he had for
              Daisy fueled a relentless quest for justice.
            </p>
          </div>
        </section>

        {/* Section 4: Symbol of Love and Bond */}
        <section className="h-screen flex items-center justify-center bg-gray-800">
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Symbol of Love and Bond
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Daisy represents the love and bond we all share with our beloved
              four-legged best friends. Her story reminds us that love and
              loyalty go beyond words.
            </p>
          </div>
        </section>

        {/* Section 5: Call to Action */}
        <section className="h-screen flex items-center justify-center bg-gray-900">
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Join the Movement
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
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
          </div>
        </section>
      </main>
    </>
  );
}
