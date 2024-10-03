

import TextField from "@mui/material/TextField";
import homeStyles from "./HomeStyles";

const Home = () => {
    const styles = homeStyles();

    return (
        <div className={styles.homeScreen}>
            <TextField className={styles.foodInput}
                       label='What do you feel like eating?'
                       variant="outlined"
            />
            <h1>Favorites</h1>
        </div>
    )
}

export default Home;