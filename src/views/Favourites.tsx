import { Empty } from "antd";
import Gallery from "../components/Gallery";
import usePhotos from "../hooks/usePhotos";

export default function Favourites() {
  const { photos, setPhotos } = usePhotos();
  const totalLiked = photos.reduce(
    (acc, e) => (e.liked ? (acc += 1) : (acc += 0)),
    0,
  );

  return (
    totalLiked
      ?
      <>
        <Gallery
          key="favs"
          data={photos}
          setData={setPhotos}
          isFavView={true}
        />
      </>
      :
      <>
        <Empty
          className="my-3"
          description={
            <span>
              You don't have any favourite photo yet...
            </span>
          }
        >
        </Empty>
      </>
  );
}
