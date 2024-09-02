export default function Body() {
  return (
    <div className="dark:bg-gray-900 dark:text-white p-4 rounded-md">
      <p className="mb-4">
        <small className="text-neutral-500 dark:text-neutral-400">
          IPA &nbsp; /ˈwiztek/ — no meaning, I made it up
        </small>
        <br />
        Hi there, I&apos;m <strong>Abdulkareem</strong> aka
        <strong>{" "}WiZtEk</strong>. I&apos;m a dude with interests in
        <strong>{" "}building things,</strong>{" "}
        I guess I would describe myself as a Fullstack Developer/Software
        Engineer but that's because I like to understand all parts of a system
        to know how it works and if possible improve it. I&apos;m mainly into
        {" "}
        <strong>game</strong> and <strong>web development</strong>{" "}
        right now and I use the <strong>terminal</strong> as much as I can.
      </p>

      <p className="mb-4">
        Right now I&apos;m working at{" "}
        <strong>
          <a
            href="#"
            target="_blank"
            // className="text-blue-500 dark:text-blue-400"
          >
            Nowhere
          </a>
        </strong>
        .
      </p>
    </div>
  );
}
