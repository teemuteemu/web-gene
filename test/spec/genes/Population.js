const Population = require('src/genes/Population.js')
const Individual = require('src/genes/Individual.js')

describe ('Population', () => {
  let testSolution
  let testSize
  let testPopulation

  beforeEach(() => {
    testSolution = 'foobar'
    testSize = 100
    testPopulation = new Population(testSize, testSolution)
  })

  it('should create a new population with size amount of individuals', () => {
    expect(testPopulation.size()).toBe(testSize)
  })

  it('should have getter and setter for individuals', () => {
    const testInd = testPopulation.getIndividual(2)
    expect(testInd.toString()).toBe(testPopulation.individuals[2].toString())

    const newInd = new Individual(testSolution)
    testPopulation.setIndividual(4, newInd)
    expect(testPopulation.getIndividual(4).toString()).toBe(newInd.toString())
  })

  it('should have a method to get the fittest individual of the population', () => {
    const newInd = new Individual(testSolution)

    newInd.setGene(0, 'f')
    newInd.setGene(1, 'o')
    newInd.setGene(2, 'o')
    newInd.setGene(3, 'b')
    newInd.setGene(4, 'a')
    newInd.setGene(5, 'r')

    testPopulation.setIndividual(4, newInd)
    expect(testPopulation.getFittest().toString()).toBe(newInd.toString())
  })
})
