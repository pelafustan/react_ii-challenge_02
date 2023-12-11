import Gallery from "../components/Gallery";
import usePhotos from "../hooks/usePhotos";

export default function Home() {
  const { photos, setPhotos, loading } = usePhotos();
  return (
    <>
      <div className="main-view">
        <Gallery
          data={photos}
          setData={setPhotos}
          loading={loading}
        />
      </div>
    </>
  );
}
