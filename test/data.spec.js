import {
  filterDataHouse,
  filterDataPatronus
} from "../src/data.js";



describe('filterDataHouse', () => {
  test('is a function', () => {
    expect(typeof filterDataHouse).toBe('function');
  });

  test('returns `house` ', () => {
    expect(filterDataHouse()).toBe('condition');
  });
});

describe('filterDataPatronus', () => {
  test('is a function', () => {
    expect(typeof filterDataPatronus).toBe('function');
  });
  test('returns `patronus` ', () => {
    expect(filterDataPatronus()).toBe('swan');
  });
});
