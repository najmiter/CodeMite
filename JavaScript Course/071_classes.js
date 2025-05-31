class BaseModel {
  #id;
  createdAt;

  constructor(id, createdAt) {
    this.#id = id ?? null;
    this.createdAt = createdAt ?? new Date();
  }

  get id() {
    const isAuthenticated = true;
    if (!isAuthenticated) throw new Error('Unauthorized!');
    return this.#id;
  }

  set id(value) {
    if (typeof value !== 'number')
      throw new TypeError('ID must be of type number!');
    this.#id = value;
  }
}

class User extends BaseModel {
  #fullName;

  constructor(fullName, id, createdAt) {
    super(id, createdAt);
    this.#fullName = fullName ?? 'Default User';
  }

  get fullName() {
    return this.#fullName;
  }
}

class Order extends BaseModel {
  constructor(id, createdAt) {
    super(id, createdAt);
  }

  // getId() {
  //   return this.#id;
  // }

  // getCreatedAt() {
  //   return this.#createdAt;
  // }
}

// const order = new Order(90);
// const user = new User();

// const id = order.getId();
// order.getId() = 123;

// console.log('id:', id);
// order.#id = 123;
// console.log('id:', order.getId());
// console.log('created at:', order.getCreatedAt());

// order.id = 67;

// user.id = 45;

// console.log('id:', order.id);
// console.log('user id:', user.id);

// const A = (Base) => {
//   return class extends Base {
//     a() {
//       console.log('a');
//     }
//   };
// };

// const B = (Base) => {
//   return class extends Base {
//     b() {
//       console.log('b');
//     }
//   };
// };

// class C extends B(A(class {})) {}

// const c = new C();

// c.a();
// c.b();

class Student {
  static Name = 'Default Name';
  static id = 'default id';

  static getName() {
    return this.Name;
  }
}

console.log(Student.getName());
// console.log(Student.id);
