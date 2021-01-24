export const Badge = (props) => {
	const { text } = props;
	return (
		<div className='p-1 font-mono text-xs text-gray-600 border-2 border-gray-400 rounded xl:text-xl lg:text-xl '>
			{text}
		</div>
	);
};

export const Heading = ({ text }) => {
	return (
		<p className='font-mono font-bold text-center md:text-xl lg:text-2xl xl:text-4xl lg:mt-5 xl:mt-5 lg:mb-5 xl:mb-5 '>
			{text}
		</p>
	);
};
// export default Badge;
