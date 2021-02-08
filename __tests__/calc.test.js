import Calculator from './../src/js/calcScripts.js';

describe('Calculator', () => {
  let earthAge;
  beforeEach(() => {
    earthAge = new Calculator(43);
    earthAge.alienAge();
    earthAge.ageCheck();
    earthAge.alienExpectancy();
    
});
test('Should create and instance of Calculator', () => {
  expect(earthAge.age).toEqual(43); 
  expect(earthAge.pastLife).toEqual(0);
  expect(earthAge.lifeLeft).toEqual(30);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[0]).toEqual(179);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[1]).toEqual(69);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[2]).toEqual(23);
});
test('alienAge should calculate 70 years into Mercury years', () => {
  expect(earthAge.alienYears[2]).toEqual(23);
});
test('ageCheck should calculate the difference of 70 and 73 for determing where total will go to',() => {
  expect(earthAge.pastLife).toEqual(0);  
  expect(earthAge.lifeLeft).toEqual(30);
});
test('should calculate 43 years into Mercury years',() => {
  expect(earthAge.life[0]).toEqual(125);
});
test('should calculate 43 years into Mercury years',() => {
  expect(earthAge.life[1]).toEqual(48);
});
test('should calculate 43 years into Mercury years',() => {
  expect(earthAge.life[2]).toEqual(16);
});
test('should calculate 43 years into Mercury years',() => {
  expect(earthAge.life[3]).toEqual(3);
});
test('Should create and instance of Calculator where user is 0 years over the avg lifespan',() => {
  let overEarthAge = new Calculator (43);
  overEarthAge.alienAge();
  overEarthAge.ageCheck();
  overEarthAge.alienExpectancy();
  expect(overEarthAge.pastLife).toEqual(0);  
  expect(overEarthAge.lifeLeft).toEqual(30);
});
test('should test array holding alien years if 3 years 3 years over the avg lifespan in Jupiter  Years',() => {
  let overEarthAge = new Calculator (76)
  overEarthAge.alienAge();
  overEarthAge.ageCheck();
  overEarthAge.alienExpectancy();
  expect(overEarthAge.life[0]).toEqual(13); 
});
test('should test array holding alien years if 3 years 3 years over the avg lifespan in Jupiter  Years',() => {
  let overEarthAge = new Calculator (76)
  overEarthAge.alienAge();
  overEarthAge.ageCheck();
  overEarthAge.alienExpectancy();
  expect(overEarthAge.life[1]).toEqual(5); 
});
test('should test array holding alien years if 3 years 3 years over the avg lifespan in Jupiter  Years',() => {
  let overEarthAge = new Calculator (76)
  overEarthAge.alienAge();
  overEarthAge.ageCheck();
  overEarthAge.alienExpectancy();
  expect(overEarthAge.life[2]).toEqual(2); 
});
test('should test array holding alien years if 3 years 3 years over the avg lifespan in Jupiter  Years',() => {
  let overEarthAge = new Calculator (76)
  overEarthAge.alienAge();
  overEarthAge.ageCheck();
  overEarthAge.alienExpectancy();
  expect(overEarthAge.life[3]).toEqual(0); 
});
});