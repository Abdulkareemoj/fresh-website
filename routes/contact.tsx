import { Head } from "$fresh/runtime.ts";

export default function Contact() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>WiZtEk • Contact</title>
      </Head>
      <section
        id="contact"
        class="lg:grid-cols-desktop grid scroll-mt-16 grid-cols-1 gap-x-10 gap-y-4 dark:bg-slate-900 dark:text-white"
      >
        <h1 class="text-5xl font-bold text-center dark:text-white">Contact</h1>
        <div class="">
          <form action="/send" class="space-y-3 py-3">
            <div class="space-y-1">
              <label for="email" class="text-sm uppercase dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
                required
                class="border(slate-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
              />
            </div>
            <div class="space-y-1">
              <label
                for="subject"
                class="text-sm uppercase dark:text-slate-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder=""
                required
                class="border(slate-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
              />
            </div>
            <div class="space-y-1">
              <label
                for="message"
                class="text-sm uppercase dark:text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter Message"
                minLength={10}
                maxLength={10000}
                rows={10}
                class="border(slate-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-slate-100 px-3 py-2 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200"
                label="message"
              />
            </div>
            <input
              type="submit"
              class="border(slate-500 1) hover:(bg-slate-200 dark:bg-slate-700) disabled:(opacity-50 cursor-not-allowed) cursor-pointer rounded-md bg-slate-100 px-3 py-2 active:bg-slate-300 dark:bg-slate-800 dark:text-slate-200"
            />
          </form>
        </div>
      </section>
    </>
  );
}
