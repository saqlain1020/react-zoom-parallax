import React from "react";
import PropTypes from "prop-types";
import css from "./styles/main.module.css";

const MainContainer = ({ images, background }) => {
  const [image1, setImage1] = React.useState();
  const [image2, setImage2] = React.useState();
  const [image3, setImage3] = React.useState();
  const [title, setTitle] = React.useState("");
  const [ind, setInd] = React.useState(-1);

  const getNextImages = (index) => {
    if (index >= images.length - 1) {
      return {
        index: 0,
        front: images[0].front,
        back: images[0].back,
        title: images[0].title,
        subTitle: images[0].subTitle,
      };
    } else {
      return {
        index: index + 1,
        front: images[index + 1].front,
        back: images[index + 1].back,
        title: images[index + 1].title,
        subTitle: images[index + 1].subTitle,
      };
    }
  };

  const init = () => {
    let obj = getNextImages(-1);
    setImage1({
      front: obj.front,
      back: obj.back,
      title: obj.title,
      subTitle: obj.subTitle,
    });
    obj = getNextImages(obj.index);
    setImage2({
      front: obj.front,
      back: obj.back,
      title: obj.title,
      subTitle: obj.subTitle,
    });
    obj = getNextImages(obj.index);
    setImage3({
      front: obj.front,
      back: obj.back,
      title: obj.title,
      subTitle: obj.subTitle,
    });
    setTitle(0);
    setTimeout(() => {
      setTitle(1);
    }, 2000);
    setTimeout(() => {
      setTitle(2);
    }, 4000);
    return obj.index;
  };
  console.log(title, image1, image2, image3);
  React.useEffect(() => {
    let ind = init();

    let interval = setInterval(() => {
      // console.log(ind)
      let obj = getNextImages(ind);
      ind = obj.index;
      setImage1(obj);
      setTitle(3);
      setTimeout(() => {
        obj = getNextImages(ind);
        ind = obj.index;
        setImage2(obj);
        setTitle(1);
      }, 2000);
      setTimeout(() => {
        obj = getNextImages(ind);
        ind = obj.index;
        setImage3(obj);
        setTitle(2);
      }, 4000);
    }, 6000);
    return () => clearInterval(interval);
  }, [images]);

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
      <div className={css.titleDiv}>
        <h1>
          {title === 1
            ? image1?.title
            : title === 2
            ? image2?.title
            : title === 3
            ? image3?.title
            : ""}
        </h1>
        <p>
          {title === 1
            ? image1?.subTitle
            : title === 2
            ? image2?.subTitle
            : title === 3
            ? image3?.subTitle
            : ""}
        </p>
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
      title: PropTypes.string,
      subTitle: PropTypes.string,
    })
  ).isRequired,
  background: PropTypes.string,
};

MainContainer.defaultProps = {
  background: "gold",
};
