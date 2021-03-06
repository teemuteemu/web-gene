import Population from './Population.js'
import Individual from './Individual.js'

const uniformRate = 0.5
const mutationRate = 0.015

export default class Algorithm {
  constructor (populationSize, solution) {
    this.solution = solution
    this.population = new Population(populationSize, this.solution)
    this.maxFitness = solution.length
    this.generationCount = 0
  }

  optimum () {
    return this.population.getFittest().getFitness() === this.solution.length
  }

  step () {
    this.generationCount++
    this.population = this.evolvePopulation()
  }

  evolvePopulation () {
    const newPopulation = new Population(this.population.size(), this.solution)

    this.population.individuals.forEach((individual, i) => {
      const selected1 = this.tournamentSelection()
      const selected2 = this.tournamentSelection()

      const newIndividual = this.crossover(selected1, selected2)

      newPopulation.setIndividual(i, newIndividual)
    })

    newPopulation.individuals = newPopulation.individuals.map((individual) => {
      return this.mutate(individual)
    })

    return newPopulation
  }

  tournamentSelection () {
    const tournamentSize = Math.max(2, Math.floor(this.population.size() / 10))
    const tournamenPopulation = new Population(tournamentSize, this.solution)

    tournamenPopulation.individuals.forEach((individual, i) => {
      tournamenPopulation.setIndividual(i, this.population.getRandomIndividual())
    })

    return tournamenPopulation.getFittest()
  }

  crossover (ind1, ind2) {
    const newIndividual = new Individual(this.solution)

    newIndividual.genes.forEach((_gene, i) => {
      let gene

      if (Math.random() <= uniformRate) {
        gene = ind1.getGene(i)
      } else {
        gene = ind2.getGene(i)
      }
      newIndividual.setGene(i, gene)
    })

    return newIndividual
  }

  mutate (individual) {
    individual.genes = individual.genes.map((gene, i) => {
      if (Math.random() <= mutationRate) {
        return individual.generateRandomGene()
      } else {
        return gene
      }
    })

    return individual
  }
}
