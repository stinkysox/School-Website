import React from "react";
import "./Gallery.css";

const photos = [
  {
    filename: "sports_day.jpg",
    description: "Students participating in various sports events.",
    imgurl: "https://via.placeholder.com/300?text=Sports+Day",
  },
  {
    filename: "science_exhibition.jpg",
    description: "Students presenting their science projects.",
    imgurl: "https://via.placeholder.com/300?text=Science+Exhibition",
  },
  {
    filename: "cultural_fest.jpg",
    description: "Students performing in the cultural fest.",
    imgurl: "https://via.placeholder.com/300?text=Cultural+Fest",
  },
  {
    filename: "classroom.jpg",
    description: "A glimpse of our interactive classrooms.",
    imgurl: "https://via.placeholder.com/300?text=Classroom",
  },
  {
    filename: "library.jpg",
    description: "Students reading and studying in the school library.",
    imgurl: "https://via.placeholder.com/300?text=Library",
  },
];

const videos = [
  {
    filename: "school_tour.mp4",
    description: "Virtual tour of Springdale Public School.",
    videourl: "https://via.placeholder.com/300?text=School+Tour",
  },
  {
    filename: "annual_function.mp4",
    description: "Highlights from the Annual Function 2023.",
    videourl: "https://via.placeholder.com/300?text=Annual+Function",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h1>Gallery</h1>

      <section>
        <h2>Photos</h2>
        <div className="photos-grid">
          {photos.map((photo) => (
            <div className="photo-card" key={photo.filename}>
              <img src={photo.imgurl} alt={photo.filename} />
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Videos</h2>
        <div className="videos-grid">
          {videos.map((video) => (
            <div className="video-card" key={video.filename}>
              <video controls width="300">
                <source src={video.videourl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{video.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
