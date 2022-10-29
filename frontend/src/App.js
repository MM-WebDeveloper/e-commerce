import './categories.styles.scss';

const App = () => {
	const categories = [
		{
			id: 1,
			title: 'Guitars',
		},
		{
			id: 2,
			title: 'Basses',
		},
		{
			id: 3,
			title: 'Keys',
		},
		{
			id: 4,
			title: 'Drums',
		},
		{
			id: 5,
			title: 'Vocals',
		},
	];
	return (
		<div className='categories-container'>
			{categories.map(({ title }) => (
				<div className='category-container'>
					<div className='background-image' />
					<div className='category-body-container'>
						<h2>{title}</h2>
						<p>Shop Now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default App;
