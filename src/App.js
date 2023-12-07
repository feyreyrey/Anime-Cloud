import './App.css';
import Loading from './Loading'
import { useDataLayerValue } from './DataLayer'
import Page from './page'

function App() {
  const [{user}, dispatch] = useDataLayerValue();
  return ( 
    <div className="App">
      {
      user? <Page />
      :
      <Loading />
      }
    </div>
  );
}

export default App;
