export default function manageCameras(cameras = [], action) {
  switch (action.type) {
    case "LOAD_CAMERAS":
      return cameras;
    default:
      return cameras;
  }
}
