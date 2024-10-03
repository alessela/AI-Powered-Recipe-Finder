import homeStyles from "./HomeStyles";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
    const styles = homeStyles();

    return (
        <div className={styles.homeScreen}>
            <SearchBar searched=""/>
            <h1>Favorites</h1>
        </div>
    )
}

export default Home;