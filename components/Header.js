import Navbar from './Navbar'
import NameBlock from './NameBlock'

const Header = () => {
	return (
		<>
			<div 
				id = "name-container-wrapper"
				className='fixed top-0 left-0 right-0 bg-white z-20 shadow-md sm:relative sm:shadow-none'
			>
				<div id = "name-container">
						<div id="name-1" className="hidden sm:block md:block opacity-100">
							<NameBlock name = "Saumya Mathur" email = "mathur.saumya@live.in"/>
						</div>
				</div>
				<div 
					id="navbar-container" 
					className="py-5">
						<div id="navbar">
							<Navbar/>
						</div>
				</div>
				<div id="name-2-container" 
					className="block col-span-3 sm:hidden">
						<NameBlock name = "Saumya Mathur" path = "@/public/cv.pdf" email = "mathur.saumya@live.in"/>
					</div>
			</div>
		</>
	)
}

export default Header