import { ButtonList } from "./ButtonList";
import { VideoContainer } from "./VideoContainer";

const MainContainer = () => {
  return (
    <>
      <div className="max-w-full">
        <ButtonList />
        <VideoContainer />
      </div>
    </>
  );
};

export { MainContainer };
