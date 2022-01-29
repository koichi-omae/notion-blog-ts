import Image from 'next/image';
import Link from 'next/link';
import Header_logo from '../../public/introduction/logo.png';

export default function PageHeader() {
  return (
    <header className='flex justify-between'>
      <Link href={'/'} passHref>
        <div className='hover:opacity-60 hover:cursor-pointer'>
          <Image src={Header_logo} width={166} height={83} alt='' />
        </div>
      </Link>

      <nav>
        <ul className='flex items-center py-4 text-center'>
          <li className='py-3 mr-4 w-36 font-semibold text-white bg-primary-base rounded-md border-2 border-primary-base'>
            投稿
          </li>
          <li className='py-3 mr-4 w-36 font-semibold text-primary-base rounded-md border-2 border-primary-base'>
            ログアウト
          </li>
        </ul>
      </nav>
    </header>
  );
}
