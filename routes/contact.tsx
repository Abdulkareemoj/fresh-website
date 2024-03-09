export default function Contact() {
  return (
    <section
      id="contact"
      class="lg:grid-cols-desktop grid scroll-mt-16 grid-cols-1 gap-x-10 gap-y-4"
    >
      <h1 class="text-3xl font-bold uppercase">
        Contact
      </h1>
      <div>
        <form action="/send" class="space-y-3 py-3">
          <div class="space-y-1">
            <label for="email" class="text-sm uppercase">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
              class="border(gray-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-gray-100 px-3 py-2"
            />
          </div>
          <div class="space-y-1">
            <label for="message" class="text-sm uppercase">
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
              class="border(gray-500 1) disabled:(opacity-50 cursor-not-allowed) w-full rounded-md bg-gray-100 px-3 py-2"
              label="message"
            />
          </div>
          <input
            type="submit"
            class="border(gray-500 1) hover:(bg-gray-200 dark:bg-gray-700) disabled:(opacity-50 cursor-not-allowed) cursor-pointer rounded-md bg-gray-100 px-3 py-2 active:bg-gray-300"
            // value={}
          />
        </form>
      </div>
    </section>
  );
}