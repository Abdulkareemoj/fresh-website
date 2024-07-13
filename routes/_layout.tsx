import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import MobileNav from "../components/MobileNav.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <>
      <MobileNav />
      <Header />
      <main className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-10 lg:py-10">
        <Component />
        <Footer />
      </main>
    </>
  );
}
