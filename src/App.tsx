import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Favourites from "./views/Favourites";
import NotFound from "./views/NotFound";
import "./App.css";
import { Layout } from "antd";
import Navbar from "./components/Navbar";
import PhotosProvider from "./contexts/PhotosContext";

type Source = {
  "original": string;
  "large2x": string;
  "large": string;
  "medium": string;
  "small": string;
  "portrait": string;
  "landscape": string;
  "tiny": string;
};

export type Photos = {
  "id": number;
  "width": number;
  "height": number;
  "url": string;
  "photographer": string;
  "photographer_url": string;
  "photographer_id": number;
  "avg_color": string;
  "src": Source;
  "liked": boolean;
  "alt": string;
};

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
