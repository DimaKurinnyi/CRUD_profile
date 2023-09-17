import Image from 'next/image';
import FacebookImage from '../../public/1.png';
import InstagramImage from '../../public/2.png';
import TwitterImage from '../../public/3.png';
import YoutubeImage from '../../public/4.png';

const Footer = () => {
  return (
    <div className="h-12 text-base flex items-center justify-between">
      <div className="">©2023 Portfolio. All rights reserved.</div>
      <div className="flex items-center gap-3">
        <Image
          src={FacebookImage}
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="image"
        />
        <Image
          src={InstagramImage}
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="image"
        />
        <Image
          src={TwitterImage}
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="image"
        />
        <Image
          src={YoutubeImage}
          width={15}
          height={15}
          className="cursor-pointer opacity-60"
          alt="image"
        />
      </div>
    </div>
  );
};

export default Footer;
