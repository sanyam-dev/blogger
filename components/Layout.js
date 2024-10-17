import Header from './Header'
import Footer from './Footer'
export default function Layout ({children}){
	return (
		<div className='flex flex-col h-screen'>
			<div className='sticky top-0'>
			<Header/>
			</div>
			<main className='mt-[200px] -z-20 sm:z-20 sm:mt-0'>
				{children}
			</main>
			<Footer/>
		</div>
	)
}
