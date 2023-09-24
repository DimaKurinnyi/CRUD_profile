import Image from 'next/image';

const page = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex-1 flex flex-col justify-between gap-10 ">
          <h1 className='text-4xl  font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing.</h1>
          <p className='text-lg font-light'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem repellendus placeat
            illum beatae nulla consequuntur cumque alias molestiae enim aspernatur! Cum et, sequi
            aspernatur nesciunt voluptatibus consectetur est autem minus.
          </p>
          <div className="flex items-center gap-2">
            <Image
              src="https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
              src="https://images.pexels.com/photos/1173651/pexels-photo-1173651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
