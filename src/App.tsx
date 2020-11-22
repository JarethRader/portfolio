import { hot } from 'react-hot-loader';
import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  useRouteMatch,
  useLocation,
  matchPath,
} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Navbar from './component/navbar';

import retry from './utils/retry';

import { prefetchMap } from './utils/preload';

const Home = React.lazy(() => retry(() => import('./routes/Home')));
const Projects = React.lazy(() => retry(() => import('./routes/Projects')));
const About = React.lazy(() => retry(() => import('./routes/About')));
const NotFound = React.lazy(() => retry(() => import('./routes/NotFound')));

const NebulaBackground = () => {
  return (
    <div className='absolute z-0 shadow-inner bg-black'>
      <div className='o o1'></div>
      <div className='o o2'></div>
      <div className='o o3'></div>
      <div className='o o4'></div>
    </div>
  );
};

const routes = [
  { path: '/about', name: 'About Me', Component: About },
  { path: '/projects', name: 'Projects', Component: Projects },
  { path: '/home', name: 'Home', Component: Home },
];

const App = () => {
  return (
    <div className='bg-black overflow-x-hidden p-0 m-0'>
      <NebulaBackground />

      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Portfolio />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

function Portfolio() {
  let match = useRouteMatch();

  const location = useLocation();
  const prefetchConf = prefetchMap.find(({ path }) =>
    matchPath(location.pathname, { path, exact: true })
  );
  React.useEffect(() => {
    if (prefetchConf) {
      const id = setTimeout(() => {
        prefetchConf.prefetchComponents.forEach((component) => {
          try {
            component();
          } catch {
            // handle error
          }
        });
      }, 2000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [prefetchConf]);

  return (
    <Navbar>
      <TransitionGroup>
        <React.Suspense fallback={<div></div>}>
          <Switch>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path}>
                <CSSTransition
                  in={match != null}
                  classNames='page'
                  timeout={5000}
                  unmountOnExit>
                  <div className='page'>
                    <Component />
                  </div>
                </CSSTransition>
              </Route>
            ))}
          </Switch>
        </React.Suspense>
      </TransitionGroup>
    </Navbar>
  );
}

export default hot(module)(App);
