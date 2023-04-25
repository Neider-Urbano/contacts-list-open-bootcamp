import State from "./estado.enum";

class ContactClass {
  id = 0;
  name = "";
  age = 0;
  state = State.Conectado;
  constructor(id, name, age, state) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.state = state;
  }
}

export default ContactClass;
