const schemesDb = require('../utils/schemes-db');

function find() {
  return schemesDb("schemes").select()
}

function findById(id) {
  return schemesDb("schemes")
    .where({ id })
    .first()
    .select()
}

function findSteps(id) {
  return schemesDb("schemes as s")
      .select("st.id", "s.scheme_name", "st.step_number", "st.instructions")
      .join("steps as st", "s.id", "st.scheme_id")
      .where("s.id", id)
}

async function add(scheme) {
  const [id] = await schemesDb("schemes").insert(scheme);
  return findById(id);
}

function update(id, changes) {
  return schemesDb("schemes")
    .where({ id })
    .update(changes, '*');
}

function remove(id) {
  return schemesDb("schemes")
    .where({ id })
    .del();
}


module.exports = {
  find, 
  findById,
  findSteps,
  add,
  update,
  remove
}