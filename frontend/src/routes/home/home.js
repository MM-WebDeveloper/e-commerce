import Directory from '../../components/directory/directory';
import guitarsBgImg from '../../assets/guitars.jpg';
import bassesBgImg from '../../assets/basses.jpg';
import keysBgImg from '../../assets/keys.jpg';
import drumsBgImg from '../../assets/drums.webp';
import vocalsBgImg from '../../assets/vocals.jpg';

const HomeComponent = () => {
	const categories = [
		{
			id: 1,
			title: 'Guitars',
			bgImage: guitarsBgImg,
		},
		{
			id: 2,
			title: 'Basses',
			bgImage: bassesBgImg,
		},
		{
			id: 3,
			title: 'Keys',
			bgImage: keysBgImg,
		},
		{
			id: 4,
			title: 'Drums',
			bgImage: drumsBgImg,
		},
		{
			id: 5,
			title: 'Vocals',
			bgImage: vocalsBgImg,
		},
	];
	return <Directory categories={categories} />;
};

export default HomeComponent;
