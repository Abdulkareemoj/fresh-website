import { Head } from "$fresh/runtime.ts";

export default function Uses() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WiZtEk • Uses</title>
      </Head>
      <div className="mx-auto max-w-container px-4 transition-all duration-100 ease-in  md:bg-white/90 md:backdrop-blur-sm ">
        <main className="prose">
          <div>Uses</div>
        </main>
      </div>
    </>
  );
}
