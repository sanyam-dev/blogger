import Link from "next/link";
import Layout from '@/components/Layout'
import DashboardLayout from '@/pages/layout'
import {getSortedPostsData} from '../../lib/posts.js';

export default function blogHome({database}){
	const children = database.map(({id, date, title})=> {
		return (

				<li key={id} className='my-[40px]'>
					<h3 className= "text-lg font-sans sm:text-2xl mb-[10px] hover:underline">
						<Link href={`/blogs/${id}`}>
							{title} 
						</Link>
					</h3>
					<p className = 'mb-[12px]'>{date}</p>
				</li>
		);
	})
	
	const wrapperChildren = wrapper(children)
	
	return(
		<>
		<Layout>
			<DashboardLayout children = {wrapperChildren} titleCard={"Blogs"}/>			
		</Layout>
		</>
	)
}

export async function getStaticProps() {
	const database = getSortedPostsData();
	return {
		props: {
			database
		},
	}
}

function wrapper(children){
	return(
		<div id = "blogListContainer">
			{children}
		</div>
	)
	
}