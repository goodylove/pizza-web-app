import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import {
  Dailyfresh,
  Footer,
  Hero,
  MobileNav,
  NavBar,
  ProductCard,
} from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza store</title>
        <meta name="description" content="your one stop shop for  pizza" />
      </Head>
      <main className="">
        <Hero />
        <Dailyfresh />
      </main>
    </>
  );
}
