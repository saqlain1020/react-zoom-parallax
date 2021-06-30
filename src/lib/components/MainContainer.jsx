import React from "react";
import PropTypes from "prop-types";
import css from "./styles/main.module.css";

const MainContainer = ({ images, background }) => {
  const [image1, setImage1] = React.useState();
  const [image2, setImage2] = React.useState();
  const [image3, setImage3] = React.useState();

  const getNextImages = (index) => {
    if (index >= images.length - 1) {
      return {
        index: 0,
        front: images[0].front,
        back: images[0].back,
      };
    } else {
      console.log(index);
      console.log(images[index + 1].front);
      return {
        index: index + 1,
        front: images[index + 1].front,
        back: images[index + 1].back,
      };
    }
  };

  const init = () => {
    let obj = getNextImages(-1);
    setImage1({
      front: obj.front,
      back: obj.back,
    });
    obj = getNextImages(obj.index);
    setImage2({
      front: obj.front,
      back: obj.back,
    });
    obj = getNextImages(obj.index);
    setImage3({
      front: obj.front,
      back: obj.back,
    });
    return obj.index;
  };

  React.useEffect(() => {
    let ind = init();
    let interval = setInterval(() => {
      let obj = getNextImages(ind);
      ind = obj.index;
      setImage1(obj);

      setTimeout(() => {
        let obj = getNextImages(ind);
        ind = obj.index;
        setImage2(obj);
      }, 1000);
      setTimeout(() => {
        let obj = getNextImages(ind);
        ind = obj.index;
        setImage3(obj);
      }, 2000);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);
  console.log(image1, image2, image3);
  return (
    <div className={css.container} style={{ background }}>
      <div className={`${css.parallaxContainer} ${css.image1}`}>
        <div
          className={`${css.backImage} ${css.backImage1}`}
          style={{ backgroundImage: `url(${image1?.back})` }}
        ></div>
        <div
          className={`${css.frontImage} ${css.frontImage1}`}
          style={{ backgroundImage: `url(${image1?.front})` }}
        ></div>
      </div>
      <div className={`${css.parallaxContainer} ${css.image2}`}>
        <div
          className={`${css.backImage} ${css.backImage2}`}
          style={{ backgroundImage: `url(${image2?.back})` }}
        ></div>
        <div
          className={`${css.frontImage} ${css.frontImage2}`}
          style={{ backgroundImage: `url(${image2?.front})` }}
        ></div>
      </div>
      <div className={`${css.parallaxContainer} ${css.image3}`}>
        <div
          className={`${css.backImage} ${css.backImage3}`}
          style={{ backgroundImage: `url(${image3?.back})` }}
        ></div>
        <div
          className={`${css.frontImage} ${css.frontImage3}`}
          style={{ backgroundImage: `url(${image3?.front})` }}
        ></div>
      </div>
    </div>
  );
};

export default MainContainer;

MainContainer.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      front: PropTypes.any,
      back: PropTypes.any,
    })
  ).isRequired,
  background: PropTypes.string,
};

MainContainer.defaultProps = {
  background: "gold",
};
