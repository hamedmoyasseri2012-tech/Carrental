import Ads from "../Components/Ads";
import Banner from "../Components/Banner";
import Comments from "../Components/Comments";
import News from "../Components/News";
import Vehicles from '../Components/Vehicles';

const Home = () => {
  return (
    <div>
      <Banner />
      <Vehicles />
      <Ads/>
      <Comments/>
      <News/>
    </div>
  );
};

export default Home;
