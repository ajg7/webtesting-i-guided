module.exports = {
  add,
};

function add(...args) {
  return args.reduce((accumulator, number) => {
    return accumulator += number
  }, 0)
}
