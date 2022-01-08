const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;

import { Home } from './pages/Home.jsx';
// import { About } from './pages/About.jsx';
import { HeaderApp } from './cmps/HeaderApp.jsx';
import { BookApp } from './pages/BookApp.jsx';
import { BookDetails } from './pages/BookDetails.jsx';
import { AddReview } from './cmps/AddReview.jsx';
import { FooterApp } from './cmps/FooterApp.jsx';

export function App() {
  return (
    <Router>
      <header>
        <HeaderApp />
      </header>
      <main className="">
        <Switch>
          <Route component={AddReview} path="/book/addReview/:bookId?" />
          <Route component={BookDetails} path="/books/:bookId" />
          <Route component={BookApp} path="/books" />
          {/* <Route component={About} path="/about" /> */}
          <Route component={Home} path="/" />
        </Switch>
      </main>
      <footer>
        <FooterApp />
      </footer>
    </Router>
  );
}
