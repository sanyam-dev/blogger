import Navbar from './Navbar'
import NameBlock from './NameBlock'

const Header = () => {
	return (
		<>
			<div id = "name-container">
					<div id="name-1" className="hidden sm:block md:block opacity-100">
						<NameBlock name = "Saumya Mathur" email = "xyz@live.in"/>
					</div>
					<div id="navbar-container" className="py-5">
						<div id="navbar">
							<Navbar/>
						</div>
				</div>
			</div>
			<div id="name-2-container" 
				className="block col-span-3 sm:hidden">
					<NameBlock name = "Saumya Mathur" email = "xyz@live.in"/>
				</div>
		</>
	)
}

export default Header