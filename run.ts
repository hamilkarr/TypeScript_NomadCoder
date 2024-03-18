const player: readonly [string, number, boolean] = ['nico', 1, true];

let a: unknown;

if (typeof a === 'number') {
    let b = a + 1;
}

if (typeof a === 'string') {
    let b = a.toUpperCase();
}

function hello() {
    console.log('x');
}

const c = hello();
c.toUpperCase();

function hello2(name: string | number) {
    if (typeof name === 'string') {
        name;
    } else if (typeof name === 'number') {
        name;
    } else {
        name;
    }
}
