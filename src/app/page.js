import Head from "next/head";

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

      <main className="bg-gray-900 text-white">
        {/* Section 1: Hero Section */}
        <section
          className="h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        >
          <div className="text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              John Wick's Dog
            </h1>
            <p className="text-lg md:text-2xl mb-8">
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
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              The Gift of Daisy
            </h2>
            <p className="text-lg md:text-xl leading-relaxed mb-8">
              Daisy was a Beagle puppy given to the former hitman John Wick as a
              present from his late wife Helen shortly after her death. A symbol
              of love and healing, Daisy was meant to help John cope with the
              grief of his wife's passing.
            </p>
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
