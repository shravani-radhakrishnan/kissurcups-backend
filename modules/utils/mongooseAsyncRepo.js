async function fetchDoc(query, model, projection, options = {}) {
  return new Promise((resolve, reject) => {
    model.find(query, projection, options, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

async function findOneDoc(query, model, projection = '', options = {}) {
  return new Promise((resolve, reject) => {
    console.log(model);
    model.findOne(query, projection, options, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

async function saveDoc(model) {
  return new Promise((resolve, reject) => {
    model.save((err, updatedDoc) => {
      if (err) {
        reject(err);
      } else {
        resolve(updatedDoc);
      }
    });
  });
}

async function fetchById(id, model, projection = '') {
  return new Promise((resolve, reject) => {
    model.findById(id, projection, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

// eslint-disable-next-line no-shadow
async function update(model, condition, update, options = {}) {
  return new Promise((resolve, reject) => {
    model.update(condition, update, options, (err, numAffected) => {
      if (!err) {
        resolve(numAffected);
      } else {
        reject(err);
      }
    });
  });
}

// eslint-disable-next-line no-shadow
function updateMany(model, condition, update, options = {}) {
  return new Promise((resolve, reject) => {
    model.updateMany(condition, update, options, (err, numAffected) => {
      if (!err) {
        resolve(numAffected);
      } else {
        reject(err);
      }
    });
  });
}

// eslint-disable-next-line no-shadow
function updateOne(model, condition, update, options = {}) {
  return new Promise((resolve, reject) => {
    model.updateOne(condition, update, options, (err, numAffected) => {
      if (!err) {
        resolve(numAffected);
      } else {
        reject(err);
      }
    });
  });
}

// eslint-disable-next-line no-shadow
async function findOneAndUpdate(model, conditions, update, options = {}) {
  return new Promise((resolve, reject) => {
    model.findOneAndUpdate(conditions, update, options, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}

async function insertMany(model, docs, options = {}) {
  return new Promise((resolve, reject) => {
    model.insertMany(docs, options, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
}


module.exports = {
  fetchDoc,
  saveDoc,
  fetchById,
  findOneAndUpdate,
  findOneDoc,
  update,
  updateOne,
  insertMany,
  updateMany,
};
