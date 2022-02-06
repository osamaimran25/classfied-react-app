import Layout from "../Layout";
import FreeshRecommendations from "./Components/FreeshRecommendations/FreeshRecommendations";
import SearchedAds from "./Components/SearchedAds/SearchedAds";
import HeroArea from "./Components/HeroArea/HeroArea";
import MoreOnMotorcycles from "./Components/MoreOnMotorcycles/MoreOnMotorcycles";
import TryIslamicAd from "./Components/TryIslamicAd/TryIslamicAd";
import { connect } from "react-redux";

const Home = ({ searchedAdsList, searchQuery }) => {
  return (
    <Layout>
      <main>
        <HeroArea />
        {/* <section>
          <MoreOnMotorcycles />
        </section> */}
        <section>
          {searchQuery != "" ? <SearchedAds /> : <FreeshRecommendations />}
        </section>
        <section>
          <TryIslamicAd />
        </section>
      </main>
    </Layout>
  );
};

const mapStateToProps = ({ auth, myads }) => ({
  token: auth.token,
  userData: auth.userData,
  searchedAdsList: myads.searchedAdsList,
  searchQuery: myads.searchQuery,
});

const mapDispatchToProps = (dispatch) => ({
  // getCatOfAds: (data) => dispatch(getCatOfAds(data)),
  // getUserByToken: () => dispatch(getUserByToken()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
