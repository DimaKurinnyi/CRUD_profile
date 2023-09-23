import Image from 'next/image';
import ContactImage from '../../../public/contact.png';
import Button from '@/components/Button';

const Contact = () => {
  return (
    <div className="">
      <h1 className="text-4xl font-extrabold text-center mb-28">Lets Keep in Touch</h1>
      <div className="flex items-center gap-24  ">
        <div className="h-[500px] relative flex-1">
          <Image src={ContactImage} alt="" fill={true} className="object-contain animate-move" />
        </div>
        <form action="" className="flex-1 flex flex-col gap-6">
          <input type="text" placeholder="name" className="p-5 bg-transparent text-lg border-2 borber-[#bbb] font-bold " />
          <input type="text" placeholder="email" className="p-5 bg-transparent text-lg border-2 borber-[#bbb] font-bold " />
          <textarea placeholder="message" cols={30} rows={10} className="p-5 bg-transparent text-lg border-2 borber-[#bbb] font-bold "></textarea>
          <Button url='#' text='Send'/>
        </form>
      </div>
    </div>
  );
};

export default Contact;
