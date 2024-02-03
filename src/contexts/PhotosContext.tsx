import React, { createContext, useState, useEffect } from "react";
import { Photos } from "../utils/types";

type PhotosContext = {
  photos: Photos[];
  setPhotos: React.Dispatch<React.SetStateAction<Photos[]>>;
}

export const PhotosContext = createContext<PhotosContext>({} as PhotosContext);

export default function PhotosProvider({ children }: { children: React.ReactNode; }) {
  const [photos, setPhotos] = useState<Photos[]>([] as Photos[]);

  useEffect(() => {
    fetch("/react_ii-challenge_02/photos.json")
      .then(res => {
        if (!res.ok) {
          Promise.reject(res.statusText);
        }
        return res.json()
      })
      .then(res => setPhotos(res.photos))
      .catch(res => console.log(res.status, res.statusText))
  }, []);

  return (
    <PhotosContext.Provider
      value={{
        photos,
        setPhotos,
      }}
    >
      {children}
    </PhotosContext.Provider>
  )
}
