import appStyles from './AppStyles';
import AppRouter from './router/AppRouter';

function App() {
  const styles = appStyles()

  return (
    <div className={styles.App}>
        <AppRouter />
    </div>
  );
}

export default App;