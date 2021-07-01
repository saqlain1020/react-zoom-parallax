"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mainModule = _interopRequireDefault(require("./styles/main.module.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MainContainer = _ref => {
  let {
    images,
    background
  } = _ref;

  const [image1, setImage1] = _react.default.useState();

  const [image2, setImage2] = _react.default.useState();

  const [image3, setImage3] = _react.default.useState();

  const [title, setTitle] = _react.default.useState("");

  const [ind, setInd] = _react.default.useState(-1);

  const getNextImages = index => {
    if (index >= images.length - 1) {
      return {
        index: 0,
        front: images[0].front,
        back: images[0].back,
        title: images[0].title,
        subTitle: images[0].subTitle
      };
    } else {
      return {
        index: index + 1,
        front: images[index + 1].front,
        back: images[index + 1].back,
        title: images[index + 1].title,
        subTitle: images[index + 1].subTitle
      };
    }
  };

  const init = () => {
    let obj = getNextImages(-1);
    setImage1({
      front: obj.front,
      back: obj.back,
      title: obj.title,
      subTitle: obj.subTitle
    });
    obj = getNextImages(obj.index);
    setImage2({
      front: obj.front,
      back: obj.back,
      title: obj.title,
      subTitle: obj.subTitle
    });
    obj = getNextImages(obj.index);
    setImage3({
      front: obj.front,
      back: obj.back,
      title: obj.title,
      subTitle: obj.subTitle
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

  _react.default.useEffect(() => {
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.container,
    style: {
      background
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.parallaxContainer, " ").concat(_mainModule.default.image1)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.backImage, " ").concat(_mainModule.default.backImage1),
    style: {
      backgroundImage: "url(".concat(image1 === null || image1 === void 0 ? void 0 : image1.back, ")")
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.frontImage, " ").concat(_mainModule.default.frontImage1),
    style: {
      backgroundImage: "url(".concat(image1 === null || image1 === void 0 ? void 0 : image1.front, ")")
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.parallaxContainer, " ").concat(_mainModule.default.image2)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.backImage, " ").concat(_mainModule.default.backImage2),
    style: {
      backgroundImage: "url(".concat(image2 === null || image2 === void 0 ? void 0 : image2.back, ")")
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.frontImage, " ").concat(_mainModule.default.frontImage2),
    style: {
      backgroundImage: "url(".concat(image2 === null || image2 === void 0 ? void 0 : image2.front, ")")
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.parallaxContainer, " ").concat(_mainModule.default.image3)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.backImage, " ").concat(_mainModule.default.backImage3),
    style: {
      backgroundImage: "url(".concat(image3 === null || image3 === void 0 ? void 0 : image3.back, ")")
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_mainModule.default.frontImage, " ").concat(_mainModule.default.frontImage3),
    style: {
      backgroundImage: "url(".concat(image3 === null || image3 === void 0 ? void 0 : image3.front, ")")
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _mainModule.default.titleDiv
  }, /*#__PURE__*/_react.default.createElement("h1", null, title === 1 ? image1 === null || image1 === void 0 ? void 0 : image1.title : title === 2 ? image2 === null || image2 === void 0 ? void 0 : image2.title : title === 3 ? image3 === null || image3 === void 0 ? void 0 : image3.title : ""), /*#__PURE__*/_react.default.createElement("p", null, title === 1 ? image1 === null || image1 === void 0 ? void 0 : image1.subTitle : title === 2 ? image2 === null || image2 === void 0 ? void 0 : image2.subTitle : title === 3 ? image3 === null || image3 === void 0 ? void 0 : image3.subTitle : "")));
};

var _default = MainContainer;
exports.default = _default;
MainContainer.propTypes = {
  images: _propTypes.default.arrayOf(_propTypes.default.shape({
    front: _propTypes.default.any,
    back: _propTypes.default.any,
    title: _propTypes.default.string,
    subTitle: _propTypes.default.string
  })).isRequired,
  background: _propTypes.default.string
};
MainContainer.defaultProps = {
  background: "gold"
};