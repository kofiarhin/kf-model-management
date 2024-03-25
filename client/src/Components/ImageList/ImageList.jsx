import "./imageList.styles.scss";
const ImageList = ({ data }) => {
  return (
    <div className="container">
      <div className="image-wrapper">
        {data.map((item, index) => (
          <a href={item} target="_blank" className="image-unit" key={index}>
            <img src={item} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
