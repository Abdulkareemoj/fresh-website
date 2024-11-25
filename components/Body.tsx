export default function Body() {
  return (
    <div className="dark:bg-gray-900 dark:text-white p-4 rounded-md">
      <p className="mb-4">
        <small className="text-neutral-500 dark:text-neutral-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </small>
        <br />
        Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. 
        Curabitur <strong>volutpat</strong> erat a justo tincidunt, non egestas velit fermentum. 
        Praesent vel <strong>web development</strong> orci nec lectus auctor vehicula. 
        Vivamus tristique <strong>game development</strong> purus in nisl fermentum scelerisque. 
        Sed faucibus, ligula a tempus vestibulum, erat magna <strong>terminal</strong> aliquam leo, 
        non dignissim ligula elit id nunc.
      </p>

      <p className="mb-4">
        Aliquam tincidunt elit id justo viverra feugiat. Curabitur at risus
        velit. Currently at{" "}
        <strong>
          <a
            href="#"
            target="_blank"
            className="text-blue-500 dark:text-blue-400"
          >
            Lorem Ipsum Inc.
          </a>
        </strong>
        .
      </p>
    </div>
  );
}
