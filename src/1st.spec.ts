/**
 * Created by john on 01/07/2016.
 */
describe('1st tests', () => {
  let i: number = 0;

  beforeAll((): void => {
    console.log("Starting test spec...");
  });

  // Runs before every test
  beforeEach((): void => {
    i++;
    console.log("Starting test " + i);
  });

  afterEach((): void => {
    console.log("Ending test " + i);
  });

  afterAll((): void => {
    console.log("Ending test spec.");
  });

  it('true is true', () => expect(true).toEqual(true));

  it('null is not the same thing as undefined',
    () => expect(null).not.toEqual(undefined)
  );
});
