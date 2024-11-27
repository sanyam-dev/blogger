import Layout from '@/components/Layout'
import DashboardLayout from '../layout'
import ProjectLayout from '../../components/ProjectLayout'
import { getSortedPostsData } from '../../lib/posts'

function getProjectLayout({database}){
  return(
    <>  
      <ProjectLayout content={database}/>
    </>
  )
}


export default function ProjectHome(database){
	const childComponent = getProjectLayout(database);
  return(
    <Layout>
      <DashboardLayout 
				children = {childComponent} 
				titleCard = {'Projects'}/>
    </Layout>
  )
}

export async function getStaticProps() {
	const postsDirectory= 'public/projects'
	const database = getSortedPostsData(postsDirectory);
	return {
		props: {
			database
		},
	}
}