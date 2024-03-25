interface User2 {
    name: string;
}

interface Player2 extends User2 {}

const nico2: Player2 = {
    name: 'nico',
};
