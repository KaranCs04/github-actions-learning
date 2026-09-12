import { add, subtract , multiply } from '../src/math.ts';

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 10 - 4 to equal 6', () => {
  expect(subtract(10, 4)).toBe(6);
});


test('multiply 3 and 4 to be equal 12',()=>{
  expect(multiply(3,4)).toBe(12);
})