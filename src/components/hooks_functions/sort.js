const sortMapKeys = (datas, sortBy) => {
  // Key : id , Value : data details
  const hashDatas = {};
  // Key : sortBy Type , Value : id
  const hashTypeToId = {};
  for (let data of datas) {
    hashDatas[data.id] = data;
    if (data[sortBy] in hashTypeToId) {
      hashTypeToId[data[sortBy]].push([data.id]);
      continue;
    }
    hashTypeToId[data[sortBy]] = [data.id];
  }
  return { hashDatas, hashTypeToId };
};

const sortAZ = (datas, setDatas) => {
  const sortBy = "title";
  const { hashDatas, hashTypeToId } = sortMapKeys(datas, sortBy);
  const sortedDatas = [];
  for (let title of Object.keys(hashTypeToId).sort()) {
    const idArr = hashTypeToId[title];
    idArr.forEach((id) => sortedDatas.push(hashDatas[id]));
  }
  setDatas(sortedDatas);
};

const sortZA = (datas, setDatas) => {
  const sortBy = "title";
  const { hashDatas, hashTypeToId } = sortMapKeys(datas, sortBy);
  const sortedDatas = [];
  for (let title of Object.keys(hashTypeToId).sort().reverse()) {
    const idArr = hashTypeToId[title];
    idArr.forEach((id) => sortedDatas.push(hashDatas[id]));
  }
  setDatas(sortedDatas);
};

const sortRandom = (datas, setDatas) => {
  var currentIndex = datas.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = datas[currentIndex];
    datas[currentIndex] = datas[randomIndex];
    datas[randomIndex] = temporaryValue;
  }

  setDatas([...datas]);
};

export { sortAZ, sortZA, sortRandom };
