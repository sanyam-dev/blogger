import Header from './Header'

export default function Layout ({children}){
	return (
		<>
			<Header/>
			<main className='-z-20 sm:mt-auto sm:h-[75vh]'>
				{children}
			</main>
			{/* FOOTER */}
		</>
	)
}
