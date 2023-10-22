'use client'
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
type ParamsType= {
  params:{id: string}
}

async function getData(id:string) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch ');
  }

  return res.json();
}

const page =async ({params}:ParamsType) => {
  const data = await getData(params.id);
  console.log(data)
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between gap-10 ">
          <h1 className='text-4xl  font-bold'>{data.title}</h1>
          <p className='text-lg font-light'>
            {data.desc}
          </p>
          <div className="flex items-center gap-2">
            <Image
              src={data.image}
              width={40}
              height={40}
              alt=""
              className="object-cover rounded-[50%]"
            />
            <span className="">Joni Jonson</span>
          </div>
        </div>
        <div className="flex-1 h-[300px] relative">
        <Image
              src={data.image}
             fill={true}
              alt=""
              className="object-cover"
            />
        </div>
      </div>
      <div className="mt-[50px] text-lg font-light text-[#999] text-justify">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, tempora doloremque saepe, illo tempore dolores error cupiditate, minus odit dolorum natus sunt. Quasi optio dolor quisquam impedit a doloremque molestias laudantium eum beatae quaerat necessitatibus, obcaecati ratione ducimus minus. Numquam eius officiis aperiam praesentium ducimus veniam, voluptas laudantium exercitationem animi expedita excepturi error quia distinctio inventore. Similique recusandae facilis a aperiam perferendis, repudiandae, dolores quam sed sapiente possimus aliquam earum itaque voluptatum impedit veritatis adipisci. Minima reiciendis exercitationem voluptatum voluptas nesciunt quis aliquid, tempora odio qui aliquam. Ut tempora officiis, ducimus voluptas soluta dolor nulla repellendus nesciunt similique voluptate excepturi!</p>
      </div>
    </div>
  );
};

export default page;
