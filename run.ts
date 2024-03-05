type Age = number;
type Name = string;
type Player = {
    name: Name;
    age: Age;
};

const playMaker = (name: string): Player => ({ name, age: 30 });
const nico = playMaker('nico');
