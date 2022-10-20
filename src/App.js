import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));
const Research = lazy(() => import('./pages/Research'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Blog1 = lazy(() => import('./pages/Blog1'));
const Blog2 = lazy(() => import('./pages/Blog2'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        {/* <Route path="/stats" component={Stats} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/research" component={Research} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/blog1" component={Blog1} />
        <Route path="/blog2" component={Blog2} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
