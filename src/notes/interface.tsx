// interface can type a object
interface Person {
    name: string;
}

// interface can extend interface
interface Children extends Person {
    age: number;
}

const me: Children = {
    name: 'Aimee',
    age: 2,
}

// interface can type a class
class Adult implements Person{
    name: 'Bob'
}

// interface can type a function
interface Greeting {
    (name: string): string;
}

const myGreeting: Greeting = (name) => 'Hi';

// declaration merging
interface Dog {
    color: string;
}

interface Dog {
    weight: number;
}

const myDog: Dog = {
    color: 'gold',
    weight: 30,
}