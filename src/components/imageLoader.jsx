import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const Loading = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImgLoader = ({ className, src, alt, finishLoadingCallback }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [callbackHasCalled, setCallbackHasCalled] = useState(false);
  useEffect(() => {
    if (!isLoading && !callbackHasCalled) {
      finishLoadingCallback();
      setCallbackHasCalled(true);
    }
  }, [isLoading, finishLoadingCallback, callbackHasCalled]);
  return (
    <>
      <Loading style={{ display: isLoading ? "" : "none" }}>
        <span>Loading image...</span>
      </Loading>
      <div style={{ display: isLoading ? "none" : "block" }}>
        <img
          className={className}
          src={src}
          alt={alt}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </>
  );
};
