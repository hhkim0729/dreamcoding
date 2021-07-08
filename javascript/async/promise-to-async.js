class UserStorage {
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async loginUser(id, password) {
    await this.delay(2000);
    if (
      (id === 'ellie' && password === 'dream') ||
      (id === 'coder' && password === 'academy')
    ) {
      return id;
    } else {
      throw new Error('not found');
    }
  }

  async getRoles(user) {
    await this.delay(1000);
    if (user === 'ellie') {
      return { name: 'ellie', role: 'admin' };
    } else {
      throw new Error('no access');
    }
  }

  async getUserWithRole(id, password) {
    const user = await userStorage.loginUser(id, password);
    const role = await userStorage.getRoles(user);
    return role;
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage
  .getUserWithRole(id, password)
  .then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
