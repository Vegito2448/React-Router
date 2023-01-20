import { Link, useSearchParams } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';

const Blog = () => {
	let [searchParams, setSearchParams] = useSearchParams();

	const { data, error, loading } = useFetch(
		'https://jsonplaceholder.typicode.com/posts'
	);

	if (loading) return <h2>Loading...</h2>;

	if (error !== '') return <h2>{error}</h2>;

	const handleChange = (event) => {
		let filter = event.target.value;

		filter ? setSearchParams({ filter }) : setSearchParams({});
	};

	return (
		<>
			<h1>Blog</h1>
			<input
				className='form-control my-3'
				type='text'
				value={searchParams.get('filter') || ''}
				onChange={handleChange}
			/>
			<nav>
				<ol className='list-group list-group-numbered'>
					{data
						.filter((item) => {
							let filter = searchParams.get('filter');
							if (!filter) return true;

							let title = item.title.toLowerCase();

							return title.startsWith(filter.toLowerCase());
						})
						.map((item) => (
							<li className='list-group-item text-capitalize' key={item.id}>
								<Link to={`/blog/${item.id}`}>{item.title}</Link>
							</li>
						))}
				</ol>
			</nav>
		</>
	);
};

export default Blog;
