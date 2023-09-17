import Image from 'next/image'
import Hero from '../../public/hero.png'

export default function Home() {
  return (
    <div className='flex gap-[100px] items-center'>
      <div className=" flex-1 flex flex-col gap-12 ">
        <h1 className=" text-7xl font-bold bg-gradient-to-b from-[#194c33] to-[#bbb] text-transparent bg-clip-text">Lorem ipsum dolor sit amet consectetur.</h1>
        <p className="text-2xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquam non exercitationem laudantium laboriosam nihil pariatur consectetur eaque illo itaque. Soluta, error non. Tenetur, et!</p>
        <button className="p-4 cursor-pointer bg-[#53c28b] rounded-md w-max text-white">See Our Work</button>
      </div>
      <div className="w-full h-[500px] object-cover ">
        <Image src={Hero} alt='Hero image'/>
      </div>
    </div>
  )
}
