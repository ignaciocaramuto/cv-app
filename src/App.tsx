import Header from "./components/Header";
import Section from "./components/Section";
import { useCvData } from "./hooks/useCvData";
import "./index.css";

export function App() {
	const { isPending, error, data } = useCvData();

	if (isPending) {
		return <div className="app">Loading...</div>;
	}

	if (error) {
		return <div className="app">Error: {error.message}</div>;
	}

	return (
		<div className="app">
			<Header />
			{data.map((section, index) => (
				<Section key={index} title={section.title} entries={section.entries} />
			))}
		</div>
	);
}

export default App;
