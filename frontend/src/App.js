import './categories.styles.scss';
import Directory from './components/directory/directory';

const App = () => {
	const categories = [
		{
			id: 1,
			title: 'Guitars',
			imageUrl:
				'https://cdn.mos.cms.futurecdn.net/4RTTiaPRfdQh7x9X3AZXzf-1200-80.jpg',
		},
		{
			id: 2,
			title: 'Basses',
			imageUrl: 'https://cdn.mos.cms.futurecdn.net/aH8MAWKFDvKc4y82LGaNHm.jpg',
		},
		{
			id: 3,
			title: 'Keys',
			imageUrl:
				'https://hammondorgans.com.au/wp-content/uploads/2017/07/Home-1200x500.jpg',
		},
		{
			id: 4,
			title: 'Drums',
			imageUrl:
				'https://cdn.shopify.com/s/files/1/1422/9358/products/GRETSCH-USA-CUSTOM-SSB-70-S-4-PIECE-DRUM-KIT-ROSEWOOD-LACQUER-DRUMAZON_14_1000x.jpg?v=1591830862',
		},
		{
			id: 5,
			title: 'Vocals',
			imageUrl:
				'https://martinmitchellsmicrophones.files.wordpress.com/2020/12/akg-d130-3-1.jpg',
		},
	];
	return <Directory categories={categories} />;
};

export default App;
