type Add = {
    (a: number, b: number): number;
    (a: number, b: number, c: number): number;
};

const add: Add = (a: number, b: number, c?: number) => {
    if (c) return a + b + c;
    return a + b;
};

add(1, 2); // 3
add(1, 2, 3); // 6
