const fetchStorage = (item, defaultVal) => {
  if (typeof Storage !== "undefined") {
    const storageItem = sessionStorage.getItem(item);
    if (storageItem) {
      switch (typeof defaultVal) {
        case "number":
          return Number(storageItem);
        case "object":
          return JSON.parse(storageItem);
        default:
          return storageItem;
      }
    }
    return defaultVal;
  }
};

export default fetchStorage;
