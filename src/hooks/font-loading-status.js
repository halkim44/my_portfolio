import { useState } from "react";

export const useFontLoadStatus = (initialState = false) => {
  const [fontLoadStatus, setFontLoadStatus] = useState(initialState);
  const setFontIsLoaded = () => {
    setFontLoadStatus(true);
  };

  return { fontLoadStatus, setFontIsLoaded };
};
