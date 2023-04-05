import Head from 'next/head'
import dynamic from "next/dynamic";
import { Inter } from 'next/font/google'

import Section2 from '@/components/section/Section2';
import Section3 from '@/components/section/Section3';
import Section4 from '@/components/section/Section4';


const inter = Inter({ subsets: ['latin'] })

export default function Home(props) {

  
  const DynamicComponent = dynamic(() =>
    import(`../components/section/${props.title}.jsx`)
  );
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <DynamicComponent />
        <Section2 />
        <Section3/>
        <Section4/>
        <h1>{props.title}</h1>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      title: "Section1",
    },
  };
}