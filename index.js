function combineUsers(...arrays) {
  // Merge all arrays using spread operator
  let mergedUsers = [].concat(...arrays);

  // Get today's date
  let today = new Date().toISOString().split("T")[0];

  // Return required object
  return {
    users: mergedUsers,
    merge_date: today
  };
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};