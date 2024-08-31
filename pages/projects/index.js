import Layout from '@/components/Layout'
import DashboardLayout from '../layout'

export default function ProjectHome(){
  return(
    <Layout>
      <DashboardLayout 
				children = {" "} 
				titleCard = {'Projects'}/>
    </Layout>
  )
}
