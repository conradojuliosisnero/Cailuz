import Nav from "./components/Nav/Nav";
import Fetching from "./components/Fetching/Fetching";
import Form from "./components/Form/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Fetching />} />
					<Route path="/Data" element={<Form />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
