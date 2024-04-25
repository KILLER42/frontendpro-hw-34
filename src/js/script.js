const init = function () {
  const sayHi = function () {
    console.log('hello');
  };

  return function createUser(name, age) {
    const lastName = 'Smith';

    return {
      name,
      age,
      lastName,
      sayHi,
    };
  };
};

const createUser = init();

const user = createUser('Alex', 22);
const user2 = createUser('Inna', 27);
const user3 = createUser('Inna', 31);

user.sayHi();
user2.sayHi();
user3.sayHi();