import Image from 'next/image';
import Facebook from '../../public/introduction/facebook.png';
import Footer_logo from '../../public/introduction/logo_white.png';
import Twitter from '../../public/introduction/twitter.png';

export default function PageFooter() {
  return (
    <footer className='h-[400px] text-center bg-primary-black'>
      <div className='pt-12 font-semibold tracking-[2px] text-white'>
        <p className='text-[10px] opacity-70'>
          CREATED BY <span className='pl-4 text-[17px] align-middle'>名前太郎</span>
        </p>
      </div>
      <div className='mt-12'>
        <Image src={Footer_logo} width={80} height={96} alt='' />
      </div>
      <div className='flex justify-center mt-8'>
        <div className='mr-4 opacity-80'>
          <Image src={Twitter} width={20} height={20} alt='' />
        </div>
        <div className='opacity-80'>
          <Image src={Facebook} width={20} height={20} alt='' />
        </div>
      </div>
      <div className='pb-[30px]'>
        <p className='mt-8 text-[7px] font-medium tracking-[1px] text-center text-white opacity-80'>
          @2021 KIKAGAKU
        </p>
      </div>
    </footer>
  );
}
