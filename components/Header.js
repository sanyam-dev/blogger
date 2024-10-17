import Navbar from './Navbar'
import NameBlock from './NameBlock'

const Header = () => {
	const name = "Saumya Mathur"
	const email = "saumya.mathur.bce20@iitbhu.ac.in"
	const cv_path = "@/public/cv.pdf"
	
	return (
		<>
			<div 
				id = "name-container-wrapper"
				className='fixed top-0 left-0 right-0 bg-white z-20 shadow-md sm:relative sm:shadow-none'
			>
				<div id = "name-container">
						<div id="name-1" className="hidden sm:block md:block opacity-100">
							<NameBlock name = {name} email = {email} path = {cv_path}/>
						</div>
				</div>
				<div 
					id="navbar-container" 
					className="">
							<Navbar/>
				</div>
				<div id="name-2-container" 
					className="block col-span-3 sm:hidden">
						<NameBlock name = {name} email = {email} path = {cv_path}/>
					</div>
			</div>
		</>
	)
}

export default Header


