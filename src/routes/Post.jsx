import { useParams } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';

export const Post = () => {
	const params = useParams();

	const { data, error, loading } = useFetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`
	);

	if (loading) return <h2>Loading...</h2>;

	if (error !== '') return <h2>{error}</h2>;

	return (
		<div className='card text-bg-dark my-4' style={{ maxWidth: '18rem' }}>
			<div className='card-header text-capitalize'>{`${data.id} - ${data.title}`}</div>
			<div className='card-body'>
				<h5 className='card-title text-capitalize'>{data.title}</h5>
				<p className='card-text'>{data.body}</p>
			</div>
		</div>
	);
};
