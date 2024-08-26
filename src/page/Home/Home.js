import "./Home.css";
import Header from "../../component/Header/Header.js";
import List from "../../component/List/List.js";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <div className="home_div">
                Home_div
                <List />
            </div>
        </div>
    )
}

export default Home;
