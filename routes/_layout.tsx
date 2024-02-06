import { PageProps } from "$fresh/server.ts";
import Footer from "../components/footer.tsx";
import Header from "../components/header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-10 lg:py-10">
        <Component />
        <Footer />
      </main>
    </>
  );
}
