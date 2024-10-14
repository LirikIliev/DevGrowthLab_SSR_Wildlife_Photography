exports.emptyFieldsChecker = (objectData) =>
  Object
    .keys(objectData)
    .some(key => !objectData[key]);