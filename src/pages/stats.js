import Link from 'next/link'
import Head from 'next/head'
export default function MyStats() {
  return (
    <>
      <Head>
        <title>User Stats</title>
      </Head>

      <div className="h-10 w-full bg-red-600 pl-5">
        <Link href='/'>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Stats</button>
        </Link>
      </div>

    </>
  )
}