const { setEnabled,
    createObj,
    compareItems,
    compareItemsAgain,
    numString,
} = require('./functions');

test("setEnabled does not return null", () => {
    expect(setEnabled(true)).not.toBe(null);
});

test("setEnabled returns true when enabled", () => {
    expect(setEnabled(true)).toBe(true);
});

test("setEnabled returns a value that is not false", () => {
    expect(setEnabled(true)).not.toBe(false);
});

test("createObject creates onject with the correct 2 properties", () => {
    expect(createObj('Frank','Sidebottom')).toEqual({
        firstName: 'Frank',
        lastName: 'Sidebottom',
    });
});

test("compareItems returns items in an array with 6 or more letters", () => {
    let array = ["Monster", "Tea", "push"]
    expect(compareItems(array)).toEqual(["Monster","Tea"])
})

test("compareItems returns items in an array with 6 or more letters", () => {
    let array = ["Monster", "Tea", "push"]
    expect(compareItemsAgain(array)).toEqual(["Monster","Tea"])
})

test("numString converts num to string", () => {
    let num = 15;
    expect(numString(num)).toEqual("15")
})


