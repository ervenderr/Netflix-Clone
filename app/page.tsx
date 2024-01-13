import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './utils/auth'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <><h1>{session?.user?.name}</h1>
    <img src={session?.user?.image} alt="" /></>
  )
}
