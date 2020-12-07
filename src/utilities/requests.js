export const submitVideoData = (videoData) => {
  return fetch("https://footage-api.herokuapp.com/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(videoData),
  });
};

export const fetchCategoriesAndCameras = () => {
  return fetch("https://footage-api.herokuapp.com/application-options", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export const fetchVideos = ({ camera, category }) => {
  return fetch(
    `https://footage-api.herokuapp.com/videos?camera=${camera}&category=${category}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
};
