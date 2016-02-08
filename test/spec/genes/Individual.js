const Individual = require('src/genes/Individual.js')

describe ('Individual', () => {
  let testSolution
  let testInd

  beforeEach(() => {
    testSolution = 'foobar'
    testInd = new Individual(testSolution)
  })

  it('should create a new Individual with random genes', () => {
    expect(testInd.genes.length).toBe(testSolution.length)
    expect(JSON.stringify(testInd.solution)).toBe(JSON.stringify(testSolution.split('')))
  })

  it('should have a getter and setter methods for genes', () => {
    expect(typeof testInd.getGene).toBe('function')
    expect(typeof testInd.setGene).toBe('function')

    testInd.setGene(2, 'x')
    expect(testInd.getGene(2)).toBe('x')
  })

  it('should have a fitness function', () => {
    expect(testInd.solution.join('')).toBe('foobar')

    testInd.setGene(0, 'f')
    testInd.setGene(1, 'o')
    testInd.setGene(2, 'o')
    testInd.setGene(3, 'b')

    testInd.setGene(4, 'r')
    testInd.setGene(5, 'a')
    expect(testInd.toString()).toBe('foobra')
    expect(testInd.getFitness()).toBe(4)

    testInd.setGene(4, 'a')
    testInd.setGene(5, 'a')
    expect(testInd.toString()).toBe('foobaa')
    expect(testInd.getFitness()).toBe(5)

    testInd.setGene(5, 'r')
    expect(testInd.toString()).toBe('foobar')
    expect(testInd.getFitness()).toBe(6)
  })
})
