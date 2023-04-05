import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Higher or Lower</title>
        <link />
      </Head>
      <div className="flex items-center justify-evenly h-[50rem] w-[60rem] border border-black m-[5rem] rounded-lg bg-white">
        <div className="border border-black h-[30rem] w-1/6 mr-auto"></div>
        <div className="border border-black h-[30rem] w-4/6"></div>
        <div className="border border-black h-[30rem] w-1/6 ml-auto"></div>
      </div>

    </>
  )
}
