import appStyles from './AppStyles';
import Header from './components/Header/Header';
import AppRouter from './router/AppRouter';

function App() {
  const styles = appStyles()

  return (
    <div >
        <Header />
        <div className={styles.App}>
          <AppRouter />
        </div>
    </div>
  );
}

export default App;