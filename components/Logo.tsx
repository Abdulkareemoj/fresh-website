import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.6/tsx/lemon-2.tsx";
export default function Logo() {
  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <LemonIcon aria-hidden="true" />
        <div class="text-2xl ml-1 font-bold">
          Home
        </div>
      </div>
    </div>
  );
}
