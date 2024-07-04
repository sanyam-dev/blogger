import Image from "next/image";
import NameBlock from '../components/NameBlock'
// import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
import Layout from '../components/Layout'
// import Link from 'next/link'
// import styles from "../styles/background.module.css"

export default function Home() {
  return (
		<>
			{/* <div id = "name-container">
					<div id="name-1" className="hidden sm:block md:block opacity-100">
						<NameBlock name = "Saumya Mathur" email = "xyz@live.in"/>
					</div>
					<div id="navbar-container" className="py-5">
						<div id="navbar">
							<Navbar/>
						</div>
				</div>
			</div> */}
			<Layout>
				<div id="main-container">
					<div id = "container"
					className="m-5 grid grid-flow-row grid-cols-1 sm:grid-cols-3 content-center">
						<div id="nav-container"
							className="sm:col-span-1 sm:h-screen sm:py-20">
						
							<div id="imageContainer"
							className="flex justify-center mb-5 sm:grid-cols-1 sm:gap-1">
								<div id="imageBox"
								className="flex justify-end sm:pr-[10%] lg:pr-[25%] items-center">
									<Image
										src = "/img/user.png"
										alt="not found image!"
										width="40"
										height="40"
										className="w-[10rem] h-[10rem] rounded-[45%] sm:w-[225px] sm:h-[225px] sm:rounded-[0%]" // Change according to picture
									></Image>
								</div>
								{/* <div id="name-2-container" 
								className="block col-span-3 sm:hidden">
									<NameBlock name = "Saumya Mathur" email = "xyz@live.in"/>
								</div> */}
							</div>
						</div>
						<div id="intro-container"
						className="col-span-2 flex flex-col py-[0.5rem] sm:py-[9rem]">
							<Introduction/>
						</div>
					</div>
				</div>
			</Layout>
		</>
  )
}
