import axios from "axios";
import { useEffect, useState } from "react";

export const Backdrop = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async (page) => {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWI5ZTg1NWYwMjc4MWYwYzg2ZDg1YTkwNDM4ZjAxMiIsInN1YiI6IjY1NDRjMGVlNmJlYWVhMDBhYzFmNDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-9iXFBRsVY-rebXldDm7ltRqFQ81fkIVo_2O89BG51Y",
      },
    };

    try {
      const response = await axios.request(options);
      const posterPath = response.data.results;
      setImages((prevImages) => [...prevImages, ...posterPath]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchImages(1);
    fetchImages(2);
  }, []);

  const getImageUrl = (posterPath) => {
    return `https://image.tmdb.org/t/p/w500${posterPath}`;
  };

  return (
    <div className="relative min-w-[1536px] ">
      <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-transparent h-full" />
      <div className="grid grid-cols-9 gap-4">
        {images.slice(0, 27).map((pic) => {
          const fullImage = getImageUrl(pic.poster_path);
          return (
            <div key={pic.id} className=" ">
              <img
                src={fullImage}
                alt=""
                className=" rounded-xl min-h-[200px] min-w-[151.11px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
