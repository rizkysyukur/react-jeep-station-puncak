import "./photo-galery.css";
import ImageGallery from "react-image-gallery";

function PhotoGalery() {
  const images = [
    {
      original: "../../assets/img/1.jpeg",
      thumbnail: "../../assets/img/1.jpeg",
    },
    {
      original: "../../assets/img/2.jpeg",
      thumbnail: "../../assets/img/2.jpeg",
    },
    {
      original: "../../assets/img/3.jpeg",
      thumbnail: "../../assets/img/3.jpeg",
    },
    {
      original: "../../assets/img/4.jpeg",
      thumbnail: "../../assets/img/4.jpeg",
    },
    {
      original: "../../assets/img/5.jpeg",
      thumbnail: "../../assets/img/5.jpeg",
    },
    {
      original: "../../assets/img/6.jpeg",
      thumbnail: "../../assets/img/6.jpeg",
    },
    {
      original: "../../assets/img/7.jpeg",
      thumbnail: "../../assets/img/7.jpeg",
    },
    {
      original: "../../assets/img/8.jpeg",
      thumbnail: "../../assets/img/8.jpeg",
    },
    {
      original: "../../assets/img/9.jpeg",
      thumbnail: "../../assets/img/9.jpeg",
    },
    {
      original: "../../assets/img/10.jpeg",
      thumbnail: "../../assets/img/10.jpeg",
    },
    {
      original: "../../assets/img/11.jpeg",
      thumbnail: "../../assets/img/11.jpeg",
    },
    {
      original: "../../assets/img/12.jpeg",
      thumbnail: "../../assets/img/12.jpeg",
    },
    {
      original: "../../assets/img/13.jpeg",
      thumbnail: "../../assets/img/13.jpeg",
    },
    {
      original: "../../assets/img/14.jpeg",
      thumbnail: "../../assets/img/14.jpeg",
    },
    {
      original: "../../assets/img/15.jpeg",
      thumbnail: "../../assets/img/15.jpeg",
    },
    {
      original: "../../assets/img/16.jpeg",
      thumbnail: "../../assets/img/16.jpeg",
    },
    {
      original: "../../assets/img/17.jpeg",
      thumbnail: "../../assets/img/17.jpeg",
    },
    {
      original: "../../assets/img/18.jpeg",
      thumbnail: "../../assets/img/18.jpeg",
    },
    {
      original: "../../assets/img/19.jpeg",
      thumbnail: "../../assets/img/19.jpeg",
    },
    {
      original: "../../assets/img/20.jpeg",
      thumbnail: "../../assets/img/20.jpeg",
    },
    {
      original: "../../assets/img/21.jpeg",
      thumbnail: "../../assets/img/21.jpeg",
    },
    {
      original: "../../assets/img/22.jpeg",
      thumbnail: "../../assets/img/22.jpeg",
    },
    {
      original: "../../assets/img/23.jpeg",
      thumbnail: "../../assets/img/23.jpeg",
    },
    {
      original: "../../assets/img/24.jpeg",
      thumbnail: "../../assets/img/24.jpeg",
    },
    {
      original: "../../assets/img/25.jpeg",
      thumbnail: "../../assets/img/25.jpeg",
    },
    {
      original: "../../assets/img/26.jpeg",
      thumbnail: "../../assets/img/26.jpeg",
    },
    {
      original: "../../assets/img/27.jpeg",
      thumbnail: "../../assets/img/27.jpeg",
    },
    {
      original: "../../assets/img/28.jpeg",
      thumbnail: "../../assets/img/28.jpeg",
    },
    {
      original: "../../assets/img/29.jpeg",
      thumbnail: "../../assets/img/29.jpeg",
    },
    {
      original: "../../assets/img/30.jpeg",
      thumbnail: "../../assets/img/30.jpeg",
    },
    {
      original: "../../assets/img/31.jpeg",
      thumbnail: "../../assets/img/31.jpeg",
    },
    {
      original: "../../assets/img/32.jpeg",
      thumbnail: "../../assets/img/32.jpeg",
    },
    {
      original: "../../assets/img/33.jpeg",
      thumbnail: "../../assets/img/33.jpeg",
    },
    {
      original: "../../assets/img/34.jpeg",
      thumbnail: "../../assets/img/34.jpeg",
    },
    {
      original: "../../assets/img/35.jpeg",
      thumbnail: "../../assets/img/35.jpeg",
    },
    {
      original: "../../assets/img/36.jpeg",
      thumbnail: "../../assets/img/36.jpeg",
    },
    {
      original: "../../assets/img/37.jpeg",
      thumbnail: "../../assets/img/37.jpeg",
    },
    {
      original: "../../assets/img/38.jpeg",
      thumbnail: "../../assets/img/38.jpeg",
    },
    {
      original: "../../assets/img/39.jpeg",
      thumbnail: "../../assets/img/39.jpeg",
    },
    {
      original: "../../assets/img/40.jpeg",
      thumbnail: "../../assets/img/40.jpeg",
    },
    {
      original: "../../assets/img/41.jpeg",
      thumbnail: "../../assets/img/41.jpeg",
    },
    {
      original: "../../assets/img/42.jpeg",
      thumbnail: "../../assets/img/42.jpeg",
    },
    {
      original: "../../assets/img/43.jpeg",
      thumbnail: "../../assets/img/43.jpeg",
    },
    {
      original: "../../assets/img/44.jpeg",
      thumbnail: "../../assets/img/44.jpeg",
    },
    {
      original: "../../assets/img/45.jpeg",
      thumbnail: "../../assets/img/45.jpeg",
    },
    {
      original: "../../assets/img/46.jpeg",
      thumbnail: "../../assets/img/46.jpeg",
    },
    {
      original: "../../assets/img/47.jpeg",
      thumbnail: "../../assets/img/47.jpeg",
    },
    {
      original: "../../assets/img/48.jpeg",
      thumbnail: "../../assets/img/48.jpeg",
    },
    {
      original: "../../assets/img/58.jpeg",
      thumbnail: "../../assets/img/58.jpeg",
    },
    {
      original: "../../assets/img/49.jpeg",
      thumbnail: "../../assets/img/49.jpeg",
    },
    {
      original: "../../assets/img/50.jpeg",
      thumbnail: "../../assets/img/50.jpeg",
    },
    {
      original: "../../assets/img/51.jpeg",
      thumbnail: "../../assets/img/51.jpeg",
    },
    {
      original: "../../assets/img/52.jpeg",
      thumbnail: "../../assets/img/52.jpeg",
    },
    {
      original: "../../assets/img/53.jpeg",
      thumbnail: "../../assets/img/53.jpeg",
    },
    {
      original: "../../assets/img/54.jpeg",
      thumbnail: "../../assets/img/54.jpeg",
    },
    {
      original: "../../assets/img/55.jpeg",
      thumbnail: "../../assets/img/55.jpeg",
    },
    {
      original: "../../assets/img/56.jpeg",
      thumbnail: "../../assets/img/56.jpeg",
    },
    {
      original: "../../assets/img/57.jpeg",
      thumbnail: "../../assets/img/57.jpeg",
    },
  ];

  return (
    <div className="container photo-galery mb-5">
      <div className="row text-center">
        <div className="col">
          <h4 className="text-white">GALERI FOTO</h4>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ImageGallery items={images} />;
        </div>
      </div>
    </div>
  );
}

export default PhotoGalery;
