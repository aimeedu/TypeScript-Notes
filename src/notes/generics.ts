// Generics
// better components reusesbility.
// for building up large software systems.
// being able to create a component that can work over a variety of types rather than a single one. 
// This allows users to consume these components and use their own types.

// 1. return the last element of an arr.
const last0 = <T>(arr: Array<T>) => {
    return arr[arr.length-1];
}
const last = <T>(arr: T[]) => {
    return arr[arr.length-1];
}
const l1 = last([1,2,3]);
const l2 = last(['a', 'b'])
const l3 = last<string>(['a', 'b'])


// 2. return an array of x, y.
const makeArr = <X, Y>(x: X, y: Y) => {
    return [x, y];
}
const a1 = makeArr(3, 6);
const a2 = makeArr("a", "k");
const a3 = makeArr(2, "e");


// 3. return an tuple of x, y.
const makeArr2 = <X, Y=number>(x: X, y: Y): [X, Y] => {
    return [x, y];
}
const a4 = makeArr2<string | null>(null, 2);


// 4. make full name with extend
const makeFullName = <T extends { firstName: string; lastName: string}>(obj: T) => {
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}
const n1 = makeFullName({firstName: "Bob", lastName: "J"});
const n2 = makeFullName({firstName: "Bob", lastName: "J", midName: "Lee"});

// 5. generic in interface, allowed us to create different types of types.
interface Tab<T> {
    id: string;
    position: number;
    data: T;
}
type NumberTab = Tab<number>;
type StringTab = Tab<string>;

// identity func: like echo
const identity = <T>(arg: T): T => {
    return arg;
}

function identity2<T>(arg: T): T {
    return arg;
}

// ?
let myIdentity: <T>(arg: T) => T = identity;

interface GenericIdentityFn {
    <T>(arg: T): T;
}

function identity3<T>(arg: T): T {
    return arg;
}

let myIdentity3: GenericIdentityFn = identity;