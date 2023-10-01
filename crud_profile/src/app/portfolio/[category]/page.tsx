import Button from '@/components/Button';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Key } from 'react';
import { items } from './data';
interface ParamsProps {
  params: { category: string };
}

const GetData = (cat: string) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }: ParamsProps) => {
  const data = GetData(params.category);
  console.log(data);
  return (
    <div>
      <h1 className="font-bold text-2xl text-regal-green">{params.category}</h1>
      {data.map((item: { id: Key; title: string; desc: string; image: string | StaticImport }) => (
        <div className="flex gap-12 mt-12 mb-24 odd:flex-row-reverse" key={item.id}>
          <div className="flex-1 flex flex-col gap-5 justify-center">
            <h1 className="font-bold text-6xl">{item.title}</h1>
            <p className="text-lg">{item.desc}</p>
            <Button url="#" text="See more" />
          </div>
          <div className="flex-1 relative h-[500px]">
            <Image src={item.image} alt="" fill={true} className="object-cover" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
