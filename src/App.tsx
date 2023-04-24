import Header from "./components/Header";
import Followers from "./components/Followers";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <section className="p-5 container mx-auto">
        <Header />
        <Followers />
        <Overview />
      </section>
    </>
  );
}

export default App;
