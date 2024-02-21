const functions = require("./functions.js");

describe('multiply function', () => {
  const {multiply} = functions;
  
  it('should be return multiple when I sent two numbers', () => {
    //ARRANGE
    // const {multiply} = functions;

    //ACT
    const result = multiply(4, 4);

    //ASSERT
    expect(result).toBe(16);
  }) 
  it('should return a false value when I sent one number', () => {
    //ARRANGE
    // const {multiply} = functions;

    //ACT
    const result = multiply(3);

    //ASSERT
    expect(result).toBeFalsy();
  })
  it('should return 0 when I sent one or both zero', () => {
    //ARRANGE
    // const {multiply} = functions;

    //ACT
    const res1 = multiply(3, 0);
    const res2 = multiply(0, 3);
    const res3 = multiply(0, 0);

    //ASSERT
    expect(res1).toBe(0);
    expect(res2).toBe(0);
    expect(res3).toBe(0);
  })
});


describe('isNull function', () => {
  it('should be return null', () => {
    //ARRANGE

    //ACT

    //ASSERT

  });
});

describe('checkTruthy function', () => {
  it('should be return true when I sent true', () => {
    //ARRANGE

    //ACT

    //ASSERT

  });
})

describe('addLastName function', () => {
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE

    //ACT

    //ASSERT

  });
})
