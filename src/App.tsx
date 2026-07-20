import { useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useOutlet } from 'react-router-dom';
import { FeedbackProvider } from '@aime-platform/aime-feedback-module';
import { Layout } from './components/Layout';
import { CookieBanner } from './components/CookieBanner';
import { BackToTop } from './components/BackToTop';
import { Home } from './pages/Home';
import { Philosophy } from './pages/Philosophy';
import { Workshops } from './pages/Workshops';
import { Model } from './pages/Model';
import { ArchetypeDetail } from './pages/ArchetypeDetail';
import { Download } from './pages/Download';
import { Enquiry } from './pages/Enquiry';
import { About } from './pages/About';
import { Privacy } from './pages/Privacy';
import { Cookies } from './pages/Cookies';
import { ModelOverview } from './pages/ModelOverview';
import { Login } from './pages/Login';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PageTransition() {
  const outlet = useOutlet();
  const { pathname } = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.remove('page-transition');
      void (ref.current as any).offsetWidth;
      ref.current.classList.add('page-transition');
    }
  }, [pathname]);

  return <div ref={ref}>{outlet}</div>;
}

export default function App() {
  useEffect(() => {
    (window as any).__APP_ROUTES__ = [
      '/',
      '/philosophy',
      '/workshops',
      '/model',
      '/archetype/versatile',
      '/archetype/heroic',
      '/archetype/enterprising',
      '/archetype/reluctant',
      '/archetype/innovative',
      '/archetype/guardian',
      '/archetype/sagelike',
      '/archetype/architect',
      '/archetype/nurturing',
      '/archetype/maverick',
      '/download',
      '/enquiry',
      '/about',
      '/privacy',
      '/cookies',
      '/model-overview',
      '/login',
    ];
  }, []);

  return (
    <FeedbackProvider
      projectId="6a5e2708d0111e8be008316c"
      projectsMsBaseUrl={import.meta.env.VITE_FEEDBACK_PROJECTS_MS_URL}
      projectsMsToken={import.meta.env.VITE_FEEDBACK_PROJECTS_MS_TOKEN}
      filesMsApiBaseUrl={import.meta.env.VITE_FEEDBACK_FILES_MS_URL}
      filesMsToken={import.meta.env.VITE_FEEDBACK_FILES_MS_TOKEN}
      teamsUrl={import.meta.env.VITE_PROJECT_TOOLS_URL}
      notifyUsers={import.meta.env.VITE_FEEDBACK_NOTIFY_USERS}
    >
      <HashRouter>
        <ScrollToTop />
        <CookieBanner />
        <BackToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PageTransition />}>
              <Route path="/" element={<Home />} />
              <Route path="/philosophy" element={<Philosophy />} />
              <Route path="/workshops" element={<Workshops />} />
              <Route path="/model" element={<Model />} />
              <Route path="/archetype/:id" element={<ArchetypeDetail />} />
              <Route path="/download" element={<Download />} />
              <Route path="/enquiry" element={<Enquiry />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/model-overview" element={<ModelOverview />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route
              path="*"
              element={
                <div className="page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="page-header__inner">
                    <h1 className="section__title">Page Not Found</h1>
                    <p className="section__subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.7)' }}>
                      The page you are looking for does not exist.
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/"
                        className="btn btn--on-black"
                        style={{ display: 'inline-flex', textDecoration: 'none' }}
                      >
                        Return Home
                      </Link>
                    </div>
                  </div>
                </div>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </FeedbackProvider>
  );
}
