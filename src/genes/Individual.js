export default class Individual {
  constructor (solution) {
    if (typeof solution === 'string') {
      solution = solution.split('')
    }
    this.solution = solution
    this.genes = Array.from(Array(this.solution.length).keys()).map((i) => { return this.generateRandomGene() })
  }

  generateRandomGene () {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ,.!'?"
    return possible.charAt(Math.floor(Math.random() * possible.length))
  }

  getGene (index) {
    return this.genes[index]
  }

  setGene (index, val) {
    this.genes[index] = val
  }

  getFitness () {
    let fitness = 0
    this.genes.forEach((gene, i) => {
      if (gene === this.solution[i]) {
        fitness++
      }
    })
    return fitness
  }

  toString () {
    return this.genes.join('')
  }
}
