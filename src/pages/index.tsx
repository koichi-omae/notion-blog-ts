import Link from 'next/link';

export default function Home() {
  return (
    <div className='h-96 text-center'>
      <h1>Homeのページです</h1>
      <Link href={'/blog/1'} passHref>
        <h2 className='mt-8 hover:opacity-60 cursor-pointer '>ブログの一覧ページへ</h2>
      </Link>
    </div>
  );
}
