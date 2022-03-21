import { useSession } from 'next-auth/react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'
import Signin from './auth/signin'

export default function Home() {
  const router= useRouter();
  const { status, data: session } = useSession({
    onUnauthenticated(){
      router.push("/auth/sigin")
    }
  });

  if(status === "loading"){
    return <Loader />;
  }

  return (
    <div>
      <Head>
        <title>Music Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </div>
  )
}
