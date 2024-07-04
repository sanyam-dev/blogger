import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });


export default async function handler(req, res){
	const response = await notion.databases.query({
		database_id: process.env.NOTION_DATABASE_ID,
		filter : {
			property: 'Blog Status',
			status:{
				"equals": "Done"
			}
		},
		sorts: [
			{
				property: 'Date',
				direction: 'descending',
			},
		],
	});
	
	res.status(200).json({
		response
	})
}