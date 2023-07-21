const Image = ({ image: { id, url, title, alt_description, description } }) => {
  const titleInfo = title;
  return (
    <div className="image-card" key={id}>
      <img src={url} alt={alt_description} />
      <div className="image-details">
        {titleInfo && <p className="imgTitle">{titleInfo.toUpperCase()}</p>}
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Image;