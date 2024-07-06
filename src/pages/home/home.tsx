import "./home.css";

function Home() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <video controls className="w-100" autoPlay>
            <source
              src={import.meta.env.BASE_URL + "assets/vid/teaser.MP4"}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default Home;
