import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReposList from "./components/ReposList";
import RepoDetails from "./components/RepoDetails";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route exact path="/" element={<ReposList />} />
          <Route path="/repo/:repoId" element={<RepoDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
