import { useContext } from "react";
import { PhotosContext } from "../contexts/PhotosContext";

export default function usePhotos() {
  const context = useContext(PhotosContext);
  if (!context) {
    throw new Error("usePhotosContext must be used within a PhotosContextProvider");
  }
  return context;
}
