import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Upload from '@/components/Upload'
// const inter = Inter({ subsets: ['latin'] })

export default function post() {
  return (
   <>
<Navbar/>
<Upload/>
   </>
  )
}
