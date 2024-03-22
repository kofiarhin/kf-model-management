import "./imageList.styles.scss";
const ImageList = ({ data }) => {
  return (
    <div className="container">
      <div className="image-wrapper">
        {data.map((item, index) => (
          <div className="image-unit" key={index}>
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
