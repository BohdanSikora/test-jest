const {fiNumb} = require('./task-1') ;

describe ('fiNumb test', () => {
    test('check that a fuction returns something', () => {
        expect(fiNumb).toBeDefined();
    });

test('check if typeof result is number', () => {
    const result = fiNumb  (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15);
    expect(typeof result).toBe('number');
});
test('check if corerect k', () => {
    expect(fiNumb(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)).toBe(8);
    expect(fiNumb(8,9,10,11,12)).toBe(2);
    expect(fiNumb(1,3,5,7,9)).toBe(5);
});

});