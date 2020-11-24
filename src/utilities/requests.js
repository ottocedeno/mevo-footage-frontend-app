export const submitVideoData = (videoData) => {
  return fetch("http://127.0.0.1:3000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(videoData),
  });
};

export const fetchCategoriesAndCameras = () => {
  return fetch("http://127.0.0.1:3000/application-options", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const fetchVideos = ({ camera, category }) => {
  return fetch(
    `http://127.0.0.1:3000/videos?camera=${camera}&category=${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};
