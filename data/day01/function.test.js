const functions =require("./function")


test("add 2+2 equal 4",()=>{
    expect(functions.add(2,2))
    .toBe(4)
})

test("add 2+2 not equal 4",()=>{
    expect(functions.add(2,2))
    .not.toBe(4)
})