import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchVideo = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  // When watch page will load, menu will be closed.
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    videoId && (
      <>
        <div className="h-screen w-screen overflow-hidden px-3 py-1">
          <iframe
            className="h-[55%] w-[75%] origin-center border-0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
            allowFullScreen
          ></iframe>
        </div>
      </>
    )
  );
};

export { WatchVideo };
