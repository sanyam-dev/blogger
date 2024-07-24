import Layout from '@/components/Layout'
import DashboardLayout from '../layout'

export default function GalleryHome(){
  return(
    <Layout>
      <DashboardLayout children = {" "} titleCard = {'Gallery'}/>
    </Layout>
  )
}