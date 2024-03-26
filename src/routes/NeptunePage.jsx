import PlanetInfo from "../components/PlanetInfo";
import data from "../data/data.json";

const NeptunePage = () => {
  const dataPlanet = data.find((data) => data.name.toLowerCase() === "neptune");
  return (
    <div>
      <PlanetInfo data={dataPlanet} planet="neptune" />
    </div>
  );
};

export default NeptunePage;
