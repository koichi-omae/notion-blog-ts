import { useRouter } from 'next/router';

export default function SelectButton({
  listPaths,
  totalPage,
}: {
  listPaths: string[];
  totalPage: Number;
}) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <select
      className='py-4 px-20 text-center text-white bg-primary-base hover:cursor-pointer'
      onChange={(e) => (window.location.href = e.target.value)}
      defaultValue={`/blog/${id}`}
    >
      {listPaths.map((listpath, i) => {
        return (
          <option key={i} value={'/blog/' + listpath}>
            {listpath}/{totalPage}
          </option>
        );
      })}
    </select>
  );
}
