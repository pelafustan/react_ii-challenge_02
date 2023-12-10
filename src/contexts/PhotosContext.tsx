import React, { createContext, useState, useEffect } from "react";
import { Photos } from "../App";

type PhotosContext = {
  photos: Photos[];
  setPhotos: React.Dispatch<React.SetStateAction<Photos[]>>;
  loading: boolean;
}

export const PhotosContext = createContext<PhotosContext>({} as PhotosContext);

export default function PhotosProvider({ children }: { children: React.ReactNode; }) {
  const [photos, setPhotos] = useState<Photos[]>([] as Photos[]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch("/react_ii-challenge_02/photos.json")
      .then(res => {
        if (!res.ok) {
          Promise.reject(res.statusText);
        }
        return res.json()
      })
      .then(res => setPhotos(res.photos))
      .catch(res => console.log(res.status, res.statusText))
      .finally(setLoading(false));
  }, []);

  return (
    <PhotosContext.Provider
      value={{
        photos,
        setPhotos,
        loading,
      }}
    >
      {children}
    </PhotosContext.Provider>
  )
}
