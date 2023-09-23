import Button from '@/components/Button';
import Image from 'next/image';

const About = () => {
  return (
    <div className="">
      <div className="w-full h-[300px] relative ">
        <Image
          src="https://images.pexels.com/photos/6334487/pexels-photo-6334487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className="object-cover grayscale "
        />
        <div className="absolute bottom-5 left-5 bg-regal-green p-2 text-white">
          <h1 className="text-2xl font-bold">Lorem, ipsum.</h1>
          <h2 className="text-xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing.</h2>
        </div>
      </div>
      <div className=" flex gap-28">
        <div className=" flex-1 mt-14 flex flex-col gap-8">
          <h1 className="text-4xl font-bold">Who are we?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt quo ipsam at
            aperiam! Ducimus eum explicabo sunt culpa inventore quibusdam iure iste adipisci aliquam
            maxime non ad, dolore vero ipsa itaque facere quos natus atque facilis incidunt? Esse,
            aperiam! Ut, sunt perspiciatis ipsa impedit laudantium voluptates quae earum totam?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea est obcaecati laboriosam
            provident, alias sapiente eum aliquid mollitia et id aperiam facere, amet, repudiandae
            praesentium sit officia soluta aspernatur non debitis sequi veritatis omnis accusamus
            doloremque nulla. Earum accusamus, voluptatibus consequatur fugiat ducimus minus dolores
            ex reiciendis animi iste nobis.
          </p>
        </div>
        <div className="flex-1 mt-14 flex flex-col gap-8">
          <h1 className="text-4xl font-bold">What we do?</h1>
          <p className="text-lg font-light text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim incidunt quo ipsam at
            aperiam! Ducimus eum explicabo sunt culpa inventore quibusdam iure iste adipisci aliquam
            maxime non ad, dolore vero ipsa itaque facere quos natus atque facilis incidunt? Esse,
            aperiam! Ut, sunt perspiciatis ipsa impedit laudantium voluptates quae earum totam?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea est obcaecati laboriosam
            provident, alias sapiente eum aliquid mollitia et id aperiam facere, amet, repudiandae
            praesentium sit officia soluta aspernatur non debitis sequi veritatis omnis accusamus
            doloremque nulla. Earum accusamus, voluptatibus consequatur fugiat ducimus minus dolores
            ex reiciendis animi iste nobis.
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
