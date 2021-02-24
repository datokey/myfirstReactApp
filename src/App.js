import Home from './page/Home';
import Navbar from './components/Navbar';
import About from './page/About';
import Detail from './page/Detail';
import Create from './page/Create';
import PageNotFound from './page/PageNotFound';

import useFetch from './hook/useFetch';
import Loading from './components/Loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {

  const { data: dataMovie, isLoading, error } =
    useFetch('http://localhost:8080/movie');


  return (
    <Router>
      <div className="flex flex-col min-h-screen justify-between bg-gray-300 font-body">
        {/* navbar */}
        <Navbar />
        {/* body */}
        <Switch>
          {/* body page */}
          <Route exact path="/">
            {/* loading  */}
            {/* pesan error  */}
            {error && <div className="flex justify-center"> {error}</div>}
            {isLoading && <div className="flex justify-center">
              <Loading />
            </div>}
            {dataMovie && <Home data={dataMovie} title="Anime" />}
          </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="*">
              <PageNotFound/>
            </Route>
        </Switch>

        {/* footer */}
        <div>Footer</div>
      </div>
    </Router>
  );
}

export default App;