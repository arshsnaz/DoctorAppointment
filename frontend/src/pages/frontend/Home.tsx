import Header from "@/components/frontend/Header";
import SpecialityMenu from "@/components/frontend/SpecialityMenu";
import TopDoctors from "@/components/frontend/TopDoctors";
import Banner from "@/components/frontend/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
