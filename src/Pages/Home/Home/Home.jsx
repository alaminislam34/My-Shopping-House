import Banner from "../Banner/Banner";
import ExploreOurProducts from "../ExploreProducts/ExploreOurProducts";
// import FlashSales from "../FlashProduct/FlashSales";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="my-20 max-w-6xl mx-auto w-11/12">
        {/* <FlashSales /> */}
        <ExploreOurProducts />
      </section>
    </div>
  );
};

export default Home;
