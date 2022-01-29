import Image from 'next/image';
import Hero2 from '../../public/introduction/hero2.png';

export default function MainTitle() {
  return (
    <div className='flex h-[360px] bg-[#6bc2c3] bg-cover bg-about-pattern'>
      <div className='items-center py-36 w-1/2 text-center text-white'>
        <h1 className='text-[40px] font-semibold tracking-[2px]'>
          ブログ <span className='ml-4 text-[37px] opacity-80'>BLOG</span>
        </h1>
      </div>
      <div className='p-8 w-1/2 text-center'>
        <Image src={Hero2} width={500} height={296} alt='' />
      </div>
    </div>
  );
}
