import Navbar from '../components/Navbar'

export default function Home() {
    return (
     <>
  <Navbar/>
   <div className='flex mx-96 my-4 '>
      <input className="px-28 h-8 mx-2 rounded-lg  bg-gray-900 text-white" type="text" placeholder="Search by wallet Address" />
</div>

<div className='text-3xl my-20 mx-96 text-gray-500  font-mono font-semibold'>
    Search to see others posts !
</div>
     </>
    )
  }