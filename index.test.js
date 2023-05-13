//mocking a function
const myFn = jest.fn()

// beforeEach(() => {
//     jest.resetAllMocks();
//   });  

test('first test',()=>{
    myFn()
    expect(myFn).toHaveBeenCalledTimes(1)
    myFn.mockReset();
});

test('second test',()=>{
    myFn()
    expect(myFn).toHaveBeenCalledTimes(1)
});