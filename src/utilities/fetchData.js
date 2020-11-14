export const submitVideoData = (videoObject) => {
  return fetch("http://127.0.0.1:3000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(videoObject),
  });
};
