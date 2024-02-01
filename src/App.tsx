import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Favourites from "./views/Favourites";
import NotFound from "./views/NotFound";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import PhotosProvider from "./contexts/PhotosContext";

export default function App() {

  return (
    <>
      <PhotosProvider>
        <Layout>
          <Layout.Header>
            <Navbar />
          </Layout.Header>
          <Layout.Content>
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/favourites"
                element={<Favourites />}
              />
              <Route
                path="*"
                element={<NotFound />}
              />
            </Routes>
          </Layout.Content>
        </Layout>
      </PhotosProvider>
    </>
  )
}
