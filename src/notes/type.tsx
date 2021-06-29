// types are static, interface is better for extending.
// interface is better for object and class.
// type is better for function.

type Hungry = boolean;

// type a function is easier than interface
type Eat = (name: string) => string;
const meEat: Eat = (name) => 'sushi';

type Person2 = {
    name: string;
}
const Kelly: Person2 = {
    name: 'KK'
}

// type can not extend type but can do intersection.

type Person3 = {
    name: string,
} & {
    gender: number,
}

// union
type Person4 = {
    name: string,
}

type Teacher = {
    teacher: boolean,
}

type Aimee = Person4 | Teacher