import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import { Post } from './routes/Post';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route index element={<Home />} />
					<Route path='blog' element={<Blog />} />
					<Route path='blog/:id' element={<Post />} />
					<Route path='contact' element={<Contact />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
