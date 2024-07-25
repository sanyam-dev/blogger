import Layout from '@/components/Layout'
import DashboardLayout from '../layout'
import fs from 'fs'
import path from 'path'
import GalleryLayout from '../../components/GalleryLayout';

function getGalleryLayout(content){
  return(
    <>  
      <GalleryLayout content={content}/>
    </>
  )
}


export default function GalleryHome({content}){
  const childComponent = getGalleryLayout(content);
  return(
    <Layout>
      <DashboardLayout children={childComponent} titleCard={'Gallery'}/>
    </Layout>
  );
}

export async function getStaticProps(){
  const contentDirectory = path.join(process.cwd(), 'public/images');
  const content =  fs.readdirSync(contentDirectory);
  return {
    props: {
      content
    }
  };
}