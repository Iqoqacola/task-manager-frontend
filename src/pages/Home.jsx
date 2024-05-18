import Counter from "../components/Counter";
import { CountProvider } from "../context/CountContex";

const Home = () => {
  return (
    <div className="pageHome">
      <CountProvider>
        <h1>HOME PAGE</h1>
        <Counter></Counter>
      </CountProvider>
    </div>
  );
};

export default Home;
