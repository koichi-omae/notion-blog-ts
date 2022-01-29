import { Client } from '@notionhq/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { renderToHTML } from 'next/dist/server/render';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Router from 'next/router';
import Card from '../../components/Card';
import MainTitle from '../../components/MainTitle';
import PageNumberTitle from '../../components/PageNumberTitle';
import SelectButton from '../../components/SelectButton';

export interface Data {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  cover: string;
  icon: string;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    photo: {
      id: string;
      type: string;
      files: [
        {
          name: string;
          type: string;
          file: {
            url: string;
            expiry_time: string;
          };
        },
      ];
    };
    categories: {
      id: string;
      type: string;
      multi_select: [{ id: string; name: string; color: string }];
    };
    date: {
      id: string;
      type: string;
      date: {
        start: string;
        end: string;
        time_zone: string;
      };
    };
    tag: { id: string; type: string; checkbox: boolean };
    title: {
      id: string;
      type: string;
      title: [
        {
          type: string;
          text: {
            content: string;
            link: string;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: string;
        },
      ];
    };
  };
  url: string;
}

export default function Blog({ params }: { params: Data[] }) {
  const router = useRouter();
  const { id } = router.query;
  const new_params = params.slice(0 + 6 * (Number(id) - 1), 6 + 6 * (Number(id) - 1));
  const totalPage = Math.ceil(params.length / 6);
  const listPaths: string[] = [...Array(totalPage)].map((_, i) => String(i + 1));

  return (
    <>
      <MainTitle />
      <div className=' bg-[#EEEEEE]'>
        <div className=''>
          <div className='container mx-auto'>
            <PageNumberTitle id={id!} totalPage={totalPage} />
          </div>
          <div className='container grid grid-cols-3 grid-rows-2 gap-6 mx-auto'>
            <Card new_params={new_params} />
          </div>
          <ul className='flex justify-center py-8'>
            {id !== listPaths[0] && (
              <li className='p-2 text-white bg-primary-base rounded-l-md'>
                <button
                  className='p-1'
                  onClick={(e) => (window.location.href = '/blog/' + String(Number(id) - 1))}
                >
                  前へ
                </button>
              </li>
            )}
            <li className='mx-px '>
              <SelectButton listPaths={listPaths} totalPage={totalPage} />
            </li>
            {id !== listPaths.slice(-1)[0] && (
              <li className='p-2 text-white bg-primary-base rounded-r-md'>
                <button
                  className='p-1'
                  onClick={(e) => (window.location.href = '/blog/' + String(Number(id) + 1))}
                >
                  次へ
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

/* {buttonPaths.map((buttonpath, i) => {
              if (Number(id) === buttonPaths.shift()) {
                return (
                  <>
                    <li className='mx-px'>
                      <SelectButton listPaths={listPaths} totalPage={totalPage} />
                    </li>
                    <li className='p-2 text-white bg-primary-base rounded-r-md'>
                      <Link href={'/blog/' + String(Number(id) + 1)} passHref>
                        <button className='p-1'>次へ</button>
                      </Link>
                    </li>
                  </>
                );
              } else if (Number(id) === buttonPaths.pop()) {
                return (
                  <>
                    <li className='p-2 text-white bg-primary-base rounded-l-md'>
                      <Link href={'/blog/' + String(Number(id) - 1)} passHref>
                        <button className='p-1'>前へ</button>
                      </Link>
                    </li>
                    <li className='mx-px'>
                      <SelectButton listPaths={listPaths} totalPage={totalPage} />
                    </li>
                  </>
                );
              } else if (Number(id) !== buttonPaths.shift() && Number(id) !== buttonPaths.pop()) {
                return (
                  <>
                    <li className='p-2 text-white bg-primary-base rounded-l-md'>
                      <Link href={'/blog/' + String(Number(id) - 1)} passHref>
                        <button className='p-1'>前へ</button>
                      </Link>
                    </li>
                    <li className='mx-px'>
                      <SelectButton listPaths={listPaths} totalPage={totalPage} />
                    </li>
                    <li className='p-2 text-white bg-primary-base rounded-r-md'>
                      <Link href={'/blog/' + String(Number(id) + 1)} passHref>
                        <button className='p-1'>次へ</button>
                      </Link>
                    </li>
                  </>
                );
              }
            })} */

export const getStaticPaths: GetStaticPaths = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId!,
  });
  const pageNumber = Math.floor(response.results.length / 6);
  const listPaths: string[] = [];
  if (response.results.length % 6 === 0) {
    [...Array(pageNumber)].map((_, i) => listPaths.push(String(i + 1)));
  } else {
    [...Array(pageNumber + 1)].map((_, i) => listPaths.push(String(i + 1)));
  }
  const urlPahts = listPaths.map((i) => {
    return { params: { id: i } };
  });

  return {
    paths: urlPahts,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId!,
  });
  return {
    props: { params: response.results },
  };
};
{
}
