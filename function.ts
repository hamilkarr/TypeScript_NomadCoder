type SuperPrint = <T, M>(arr: T[], b: M) => T;

const superPrint: SuperPrint = (arr) => arr[0];
superPrint([1, 2, 3, 4], 'X');
// superPrint(['a', 'b', 'c', 'd']);
// superPrint([true, false, true, false]);
// superPrint([1, 2, true, 'hello']);
