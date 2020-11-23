export default function manageVideos(videos = [], action) {
  switch (action.type) {
    case "LOAD_VIDEOS":
      return (videos = action.videos);
    default:
      return videos;
  }
}
