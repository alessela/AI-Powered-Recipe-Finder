import appStyles from './AppStyles';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';

function App() {
  const styles = appStyles()

  return (
    <div className={styles.App}>
      <div>
        <Header />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;