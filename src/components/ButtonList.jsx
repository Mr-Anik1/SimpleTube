import { buttons } from "../utils/constants";
import { Button } from "./Button";

const ButtonList = () => {
  return (
    <>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-1">
          {buttons.map((button) => (
            <Button key={button.id} name={button.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export { ButtonList };
