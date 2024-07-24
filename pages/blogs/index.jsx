import styles from "./index.module.css";
import Link from "next/link";
import Layout from '@/components/Layout'
import DashboardLayout from '@/pages/layout'

import {getSortedPostsData} from '../../lib/posts.js';
export default function blogHome({database}){
	const children = database.map(({id, date, title})=> {

		return (
			<li key={id} className={styles.post}>
				<h3 className={styles.postTitle}>
					<Link href={`/blogs/${id}`}>
						{title} 
					</Link>
				</h3>

				<p className={styles.postDescription}>{date}</p>
					<Link href={`/blogs/${id}`}>Read post  →</Link>
			</li>
		);
	})
	return(
		<>
		<Layout>
			<DashboardLayout children = {children} titleCard={"Blogs"}/>			
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