import Head from 'next/head'
import Main from '../components/Main'
import 'tailwindcss/tailwind.css'
import '../functions/requisitions'

export default function Home() {
  return (
    <div className="container h-screen w-screen">
      <Head>
        <title>Desafio 70</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>
      <Main />
    </div>
  )
}
