import Gallery from "../components/Gallery";
import usePhotos from "../hooks/usePhotos";

export default function Home() {
  const { photos, setPhotos } = usePhotos();
  return (
    <>
      <Gallery
        key="home"
        data={photos}
        setData={setPhotos}
      />
    </>
  );
}
