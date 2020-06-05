/** Copyright Google LLC */
describe('Temp:', () => {
  const bar = 'baaar';
  const foo: {[key: string]: () => string} = {[bar]: () => ''};

  // Command 1: `yarn tsc -p packages/tsconfig.json`
  // Command 2: `yarn bazel test //packages/temp`

  it('correctly fails with both commands when the type error is in `toBe()`', () => {
    spyOn(foo, bar).and.returnValue(null as any);
    expect(foo[bar]()).toBe(null);  // <-- Type error: Expected type 'string'.
  });

  it(
      'correctly fails with command 1 but incorrectly succeeds with command 2 when the type ' +
      'error is in `returnValue()`', () => {
    spyOn(foo, bar).and.returnValue(null);  // <-- Type error: Expected type 'string'.
    expect(foo[bar]()).toBe(null as any);
  });
});
