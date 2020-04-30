import { filterData } from '../src/data.js';


describe('filterData', () => {
  test('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  test('returns `house`', () => {
    expect(filterData()).toBe('true');
  });
});


/*describe('anotherExample', () => {
  test('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  test('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
