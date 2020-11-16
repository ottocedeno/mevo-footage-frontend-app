export default function manageCategories(categories = [], action) {
  switch (action.type) {
    case "LOAD_CATEGORIES":
      return (categories = action.categories);
    default:
      return categories;
  }
}
