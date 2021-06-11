import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import Posts from "./components/Posts";
import "./App.css";

function App() {
	return (
		<div className="App">
				<div>
					<h1>Articles</h1>
					<List />
				</div>
				<div>
					<h2>Add a new article</h2>
					<Form />
				</div>
				<div>
					<h2>Remote Posts</h2>
					<Posts />
				</div>
		</div>
	);
}

export default App;
