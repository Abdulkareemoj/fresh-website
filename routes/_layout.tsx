import { PageProps } from "$fresh/server.ts";
import Footer from "../components/Footer.tsx";
import Header from "../islands/Header.tsx";

export default function Layout({ Component }: PageProps) {
  // do something with state here
  return (
    <>
      <Header />
      <main className="bg-white dark:bg-slate-900">
        <div className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-10 lg:py-10 dark:bg-slate-900 dark:text-white">
          <Component />
          <Footer />
        </div>
      </main>
    </>
  );
}
