export default function PageNumberTitle({
  id,
  totalPage,
}: {
  id: string | string[];
  totalPage: number;
}) {
  return (
    <div className='py-8'>
      <li className='inline-block mr-3 mb-3'>
        <span className='py-1 px-2 text-[0.8125rem] font-bold text-primary-base rounded-md border border-primary-base'>
          ビジネス
        </span>
      </li>
      <h3 className='inline-block'>
        <span className='font-semibold'>{id}</span>
        {` / ${totalPage}`}ページ
      </h3>
    </div>
  );
}
