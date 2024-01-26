import Navbar from '../components/Navbar'

const NotFound = () => {
  return (
    <div className='w-full h-screen bg-[#FFF0DE] flex flex-col items-center'>
      <div className='w-[90%]'>
        <Navbar />
      </div>

      <div className='w-full h-[calc(100vh-100px)] flex justify-center items-center'>
        <h1 className='text-3xl font-bold'>Page Not Found!</h1>
      </div>
    </div>
  )
}

export default NotFound