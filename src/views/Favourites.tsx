import Gallery from "../components/Gallery";
import usePhotos from "../hooks/usePhotos";
import { Photos } from "../App";

export default function Favourites() {
  const { photos, setPhotos } = usePhotos();
  const filtered: Photos[] = photos.filter(photo => photo.liked)
  return (
    <>
      <div className="main-view">
        <Gallery
          key="favs"
          data={filtered}
          setData={setPhotos}
          isFav={true}
        />
      </div>
    </>
  );
}
