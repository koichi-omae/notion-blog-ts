import Image from 'next/image';
import Link from 'next/link';
import { Data } from '../pages/blog/[id]';

export default function Card({ new_params }: { new_params: Data[] }) {
  const characterLimit: number = 21;

  return (
    <>
      {new_params.map((param, i) => (
        <div key={param.id}>
          <Link passHref href={`/blog/${param.id.replace(/-/g, '')}`}>
            <div className='hover:opacity-70 cursor-pointer'>
              <Image
                src={param.properties.photo.files[0].file.url}
                width={550}
                height={300}
                alt=''
              />
              <div className='p-8 mt-[-10px] bg-white rounded-b-lg drop-shadow-lg'>
                <p className='opacity-60'>{param.properties.date.date.start}</p>
                {param.properties.title.title.map((text, i) => {
                  let len = 0;
                  for (i = 0; i < text.plain_text.length; i++) {
                    if (text.plain_text[i].match(/[ -~]/)) {
                      len += 0.5;
                    } else {
                      len += 1;
                    }
                  }
                  if (len > characterLimit) {
                    return (
                      <h3 key={i} className='px-4 text-[22px] tracking-[2px]'>
                        {param.properties.title.title[0].plain_text.substring(0, characterLimit) +
                          '...'}
                      </h3>
                    );
                  }
                  return (
                    <h3 key={i} className='px-4 text-[22px] tracking-[2px]'>
                      {param.properties.title.title[0].plain_text}
                    </h3>
                  );
                })}
                {param.properties.categories.multi_select.map((category) => (
                  <ul key={category.id} className='inline-block pt-3 -mb-3'>
                    <li className='inline-block mr-3 mb-3'>
                      <span className='py-1 px-2 text-[0.8125rem] font-bold text-primary-gray rounded-md border border-primary-gray'>
                        {category.name}
                      </span>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}
