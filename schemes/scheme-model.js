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

// function findSteps(id) {
//   return schemesDb("schemes as s")
//     .where({ id })
//     .select("s.scheme_name", "s.step_number", "s.instructions")
// }

function findSteps(id) {
  let { page = 1, limit = 100, sortby = 'id', sortdir = 'asc' } = id;
  const offset = limit * (page - 1);

  let rows = schemesDb('steps as s')
    .join("schemes as sc", "s.scheme_id", "sc.id")
    .orderBy(sortby, sortdir)
    .limit(limit)
    .offset(offset)
    .select();

  return rows;
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