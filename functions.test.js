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
  const {isNull} = functions;
  it('should be return null', () => {
    //ARRANGE

    //ACT
    const res = isNull();

    //ASSERT
    expect(res).toBeNull();
  });
  it('should return null when I sent null', () => {
    //ARRANGE

    //ACT
    const res = isNull(null);

    //ASSERT
    expect(res).toBeNull();
  });
  it('should return null when the input is a non-false value', () => {
    //ARRANGE

    //ACT
    const res1 = isNull("Im not falsy bro");
    const res2 = isNull(8);
    const res3 = isNull(true);

    //ASSERT
    expect(res1).toBeNull();
    expect(res2).toBeNull();
    expect(res3).toBeNull();
  });
});

describe('checkTruthy function', () => {
  const {checkTruthy} = functions;
  it('should be return true when I sent true', () => {
    //ARRANGE

    //ACT
    const res = checkTruthy(true);

    //ASSERT
    expect(res).toBeTruthy();
  });
  it('should return true if I sent the negation of false', () => {
    //ARRANGE

    //ACT
    const res = checkTruthy(!false);

    //ASSERT
    expect(res).toBeTruthy();
  });
  it('should return false if I sent other truthy values', () => {
    //ARRANGE

    //ACT
    const res1 = checkTruthy("Trust me, Im a true value");
    const res2 = checkTruthy(23);

    //ASSERT
    expect(res1).toBeFalsy();
    expect(res2).toBeFalsy();
  });
})

describe('addLastName function', () => {
  const {addLastName} = functions;
  it('should be return Pepito Perez when I sent Perez', () => {
    //ARRANGE

    //ACT
    const res = addLastName("Perez");

    //ASSERT
    expect(res).toEqual({"firstname": "Pepito", "lastname": "Perez"});
  });
  it('should return Pepito when I sent an empty string', () => {
    //ARRANGE
    
    //ACT
    const res = addLastName("");
    
    //ASSERT
    expect(res).toEqual({"firstname": "Pepito", "lastname": ""});
  });
  it('should return an Object even if I sent any value', () => {
    //ARRANGE

    //ACT
    const res1 = addLastName(false);
    const res2 = addLastName(true);
    const res3 = addLastName([]);
    const res4 = addLastName("This is the last time");

    //ASSERT
    expect(typeof res1).toBe("object");
    expect(typeof res2).toBe("object");
    expect(typeof res3).toBe("object");
    expect(typeof res4).toBe("object");
  });
})
