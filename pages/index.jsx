import Layout from '../components/Layout'
import DashBoardLayout from './layout'
import Introduction from '@/components/Introduction'
import Image from "next/image";

function TitleImage(){
	return(
		<Image
			src = "/img/user.png"
			priority={true}
			alt="not found image!"
			width="40"
			height="40"
			className="w-[10rem] h-[10rem] rounded-[45%] sm:w-[225px] sm:h-[225px] sm:rounded-[0%]" // Change according to picture
		></Image>
	)
}

function IntroductionData(){
	return(
		<Introduction/>
	)
}

export default function Home() {

	
  return (
		<>
			<Layout>
				<DashBoardLayout children = {IntroductionData()} titleCard={TitleImage()} />
			</Layout>
		</>
  )
}
