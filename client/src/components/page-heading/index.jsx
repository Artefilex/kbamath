import PropTypes from "prop-types";
import { useAppearance } from "../../store/appearance/hooks";
import classNames from "classnames";

export default function PageHeader({ image , text }) {
  const {theme} = useAppearance()
  return (
    <header className={classNames("relative mt-5 w-full flex gap-4  min-h-[8rem]  justify-center mobile:min-h-[12rem]  overflow-hidden group rounded-md mb-12",{
      "text-white/70" : theme.name === "light"
    })}>
      <img
        src={image}
        alt="ssss"
        className="absolute top-0 left-0 object-cover  w-full h-full transition-transform transform-group group-hover:scale-[1.04] rounded-md  duration-500"
      />
      <h2 className="text-[3.5rem] mobile:text-[5rem] tablet:text-[7rem] laptop:text-[10rem] blog-second-bg opacity-100  w-full text-center z-[2] hover:opacity-80 transition-all duration-300">
        {text}
      </h2>
    </header>
  );
}

PageHeader.propTypes = {
  image: PropTypes.node,
  text: PropTypes.string,
};
