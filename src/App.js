import './styles/global.css';
import './App.css';
import { Badge, Heading } from './components/ReusbaleComponents';
function App() {
	return (
		<div className='flex items-center justify-center bg-gray-200 '>
			<div className='grid xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 xs:grid-cols-1 sm:grid-cols-1 '>
				{/*Start  Of Card  */}
				<div className='p-2 bg-white'>
					<div className='grid border-2 border-gray-300 lg:p-5 xs:grid-col-1 sm:grid-cols-3 md-grid-cols-3'>
						<div className='xs:w-5/5 sm:w-5/5 md:w-5/5'>
							<img
								src='https://techcrunch.com/wp-content/uploads/2017/05/joe-eazor-portrait.jpg'
								className='object-contain w-full h-48 rounded'
								alt=''
							/>
						</div>
						{/*Start  Middle Content  */}
						<div className='flex flex-col mt-5 xs:w-5/5 sm:w-5/5 md:w-5/5'>
							<div className='flex flex-col items-center justify-center mt-5 md:justify-start '>
								<p className='font-sans text-2xl font-bold xl:text-4xl lg:text-4xl md:text-2xl sm:text-center md:text-left md:w-full'>
									William Herlands
								</p>
								<p className='font-mono text-gray-400 lg:text-2xl md:w-full md:text-left md:text-lg '>
									Co-Founder, BZR
								</p>
							</div>

							<div className='flex flex-col items-center justify-center mt-5 lg:justify-start lg:flex-row'>
								<button className='p-3 mb-3 ml-3 font-mono font-thin text-gray-600 bg-white border border-gray-300 rounded shadow-lg text-md md:text-xs xl:text-xl lg:text-md'>
									Accepts 98% of the meetings
								</button>
							</div>
						</div>
						{/*End   Middle Content  */}
						<div className='grid lg:grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 '>
							<div className='flex items-center justify-center mt-2 mb-2'>
								<span className='font-bold tracking-widest text-blue-400 text-md'>
									Verified
								</span>
								<svg
									style={{ height: '25px', width: '25px' }}
									className='text-blue-500 fill-current '
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 20 20'
								>
									<path d='M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z' />
								</svg>
							</div>

							<div className='flex items-center justify-center mt-2 mb-2'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									style={{
										height: '30px',
									}}
									className='border-l-2 border-gray-500 '
									viewBox='0 0 20 20'
								>
									<path d='M4 10c0-1.1.9-2 2-2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-8zm2 0v8h8v-8h-2V8H8v2H6zm3-6.17V16h2V3.83l3.07 3.07 1.42-1.41L10 0l-.7.7-4.8 4.8 1.42 1.4L9 3.84z' />
								</svg>
							</div>
						</div>
					</div>
					{/*  */}
					<div className='flex w-full p-2 bg-white '>
						<div className='w-1/6 bg-white '></div>
						<div className='w-4/6 p-3 bg-white '>
							{/* Affiliations  */}
							<div className='grid grid-cols-1 mt-3 '>
								<Heading text='Affiliations' />
							</div>

							<div className='flex flex-col xs:flex-col sm:flex-col md:flex-col lg:flex-row lg:justify-around'>
								<div>
									<span className='font-mono text-gray-600 text-md xl:text-xl lg:text-xl '>
										Co-founder, BZR
									</span>
								</div>
								<div>
									<span className='font-mono text-gray-600 text-md xl:text-xl lg:text-xl'>
										CEO,{' '}
										<a
											href='#'
											className='font-mono text-gray-300 text-gray-400 underline text-md nav-link'
										>
											Willow
										</a>
									</span>
								</div>
								<div>
									<span className='font-mono text-gray-600 text-md xl:text-xl lg:text-xl'>
										PhD Machine Learning, CMU
									</span>
								</div>
							</div>
							{/* End Affiliations  */}
							{/* Start Industries   */}
							<div className='grid grid-cols-1 mt-3 '>
								<Heading text='Industries' />
							</div>

							<div className='grid gap-2 mt-3 mb-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 '>
								<Badge text='	#CyberSecurity' />
								<Badge text='	#Ecommerce' />
								<Badge text='	#MachineLearning' />
								<Badge text='	#VentureCapital' />
								<Badge text='	#ArtificialIntellgence' />
							</div>

							{/* End Industries  */}

							{/* Start Meeting Button  */}
							<div className='grid grid-cols-1 p-2'>
								<button className='w-full p-1 text-lg text-white bg-blue-500 rounded-md xl:text-2xl lg:text-xl '>
									Request Meeting - $250
								</button>
							</div>
							{/* End Meeting Button  */}
						</div>
						<div className='w-1/6 bg-white '></div>
					</div>
				</div>
				{/*End  Of Card  */}
			</div>
		</div>
	);
}

export default App;
