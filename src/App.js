import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./Projects";
import { Link } from "react-router-dom";

function App() {
	const linkStyle = {
		textDecoration: "none",
		color: "white",
	};
	return (
		<Router>
			<Route path="/projects" exact>
				<Projects />
			</Route>
			<Route path="/" exact>
				<div className="App">
					<div className="container">
						<div className="title">
							<div className="title__name">Vishnu Vardan</div>
							<div className="title__role">
								{" "}
								- Programmer <span class="or-symbol">|</span> Game Dev{" "}
								<span class="or-symbol">|</span> Guitarist
							</div>
						</div>
						<div className="image-links">
							<div className="img img--1">
								<img
									src="https://besthqwallpapers.com/Uploads/2-1-2021/150010/thumb2-github-red-logo-4k-red-brickwall-github-logo-social-networks.jpg"
									alt="github logo"
									className="image"
								/>
							</div>
							<div className="img img--2">
								<img
									src="https://kiiky.com/wp-content/uploads/2020/06/CV-boost.jpg"
									alt="cv padam"
									className="image"
								/>
							</div>
							<Link to="/projects" style={linkStyle}>
								<div className="img img--3">
									<img
										src="https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
										alt="projects text"
										className="image"
									/>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</Route>
		</Router>
	);
}

export default App;
