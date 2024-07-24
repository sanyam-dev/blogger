import Header from './Header'

export default function Layout ({children}){
	return (
		<>
			<Header/>
			<main className='mt-[200px] -z-20 sm:mt-auto'>
				{children}
			</main>
			{/* FOOTER */}
		</>
	)
}
