import { useLoaderData } from "react-router-dom";
import Banner from "./HomeSection.jsx/Banner";
import Brand from "./HomeSection.jsx/Brand";

const Home = () => {
  const brands = useLoaderData();
  return (
    <div className="container mx-auto">
      <Banner></Banner>

      {/* brand section  */}
      <div className="my-4 px-3 ">
        <h2 className="text-2xl sm:text-4xl font-black text-center">
          Chose Your Favorite Brand
        </h2>
        <div className="max-w-5xl mx-auto text-justify px-4 sm:text-center my-2 text-gray-500">
          <p>
            Explore the best in tech and innovation with our Choose Your
            Favorite Brand section. Dive into the world of renowned brands such
            as Apple, Google, Microsoft, and more. Discover their latest
            products, breakthroughs, and designs—all in one place. Pick your
            preferred brand and immerse yourself in a realm of cutting-edge
            technology and exceptional experiences.
          </p>
        </div>
        <div className="  grid sm:grid-cols-2 lg:grid-cols-3 my-4">
          {brands.map((brand) => (
            <Brand key={brand.id} brand={brand}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
