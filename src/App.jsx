import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
	return (
		// The basename tells the router where the "root" of your site is
		<Router basename="/click-me">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/birthday-wishes" element={<SuccessPage />} />
			</Routes>
		</Router>
	);
}

export default App;
