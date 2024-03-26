import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";
const HomePage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "earth");

  return (
    <div>
      <PlanetInfo data={dataPlanet} planet="earth" />
    </div>
  );
};

export default HomePage;
