// @ts-nocheck

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from '../layout/layout';
import FallbackLoading from '../components/ui/fallbackLoading';
import Chat from '../components/messages/chatbox';

const Dashboard = lazy(() => import('../pages/dashboard'));
const Projects = lazy(() => import('../pages/projects'));
const Messages = lazy(() => import('../pages/messages'));
const MobileChatBox = lazy(
  () => import('../components/messages/mobileChatBox'),
);

const MainRouter = () => {
  // #ignore eslint
  return (
    <Router>
      <Suspense fallback={<FallbackLoading />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/messages/:chatId" element={<MobileChatBox />} />
          </Routes>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default MainRouter;
