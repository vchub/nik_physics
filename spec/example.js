// round number or vector to a given precision
describe('round', ()=> {
  it('round', ()=> {
    expect(round(1.51, 1)).toEqual(1.5)
    expect(round(1.516, 2)).toEqual(1.52)
  })

  it('round vector', ()=> {
    expect(round([1.51, 2.58], 1)).toEqual([1.5, 2.6])
  })
  it('round2', ()=> {
    expect(round2(1.516)).toEqual(1.52)
    expect(round2([1.519, 2.581], 2)).toEqual([1.52, 2.58])
  })
})

let round = (x, precision)=> {
  let pw = 10**precision
  if (typeof x === 'number') {
    return Math.round(x*pw)/pw
  } else {
    return x.map((y)=> Math.round(y*pw)/pw)
  }
}

let round2 = (x)=> round(x, 2)


// trigonometric function
describe('trig function', ()=> {
  it('sin', ()=> {
    expect(sin(90)).toEqual(1)
    expect(sin(45)).toEqual(1/sqrt(2))
  })

  it('cos', ()=> {
    expect(cos(0)).toEqual(1)
    expect(round2(cos(90))).toEqual(0)
    expect(round2(cos(45))).toEqual(round2(1/sqrt(2)))
  })
})

let pi = Math.PI
let sqrt = Math.sqrt
let toRadian = (x)=> x/180*pi
let sin = (x)=> Math.sin(toRadian(x))
let cos = (x)=> Math.cos(toRadian(x))
let tan = (x)=> Math.tan(toRadian(x))


// vector algebra
describe('sum and dot product of vectors', ()=> {
  it('sum', ()=> {
    expect(sum([1,2], [1, 2])).toEqual([2,4])
    expect(sum([1,2], [1, 3])).not.toEqual([2,4])
  })
})

let sum = (x, y)=> x.map((num, ind)=> num + y[ind])
