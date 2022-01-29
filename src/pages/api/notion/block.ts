// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from '@notionhq/client';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const database_res = await notion.databases.query({
    database_id: databaseId!,
  });

  const page_list: string[] = database_res.results.map((result) => result.id);
  const page_res = await notion.pages.retrieve({
    page_id: page_list[0],
  });
  const block_res = await notion.blocks.children.list({
    block_id: page_list[0],
  });
  console.log(database_res);
  res.status(200).json({ notion_page: page_res, notion_block: block_res });
}
