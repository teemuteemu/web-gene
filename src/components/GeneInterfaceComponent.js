import React from 'react'

const WebGene = require('../webgene/main.js')

class SolutionComponent extends React.Component {
  constructor () {
    super()
  }

  render () {
    return (
      <p>Found the solution on generation { this.props.generation }</p>
    )
  }
}

export default class GeneInterfaceComponent extends React.Component {
  constructor () {
    super()

    this.state = {
      generation: 0,
      fittest: {
        fitness: 0,
        solution: ''
      },
      algorithmState: 'stop' // 'stop' || 'run' || 'end'
    }
  }

  componentWillMount () {
    WebGene.on('progress', this.onProgress.bind(this))
    WebGene.on('end', this.onEnd.bind(this))
  }

  onRunClick (e) {
    const solution = this.refs.solution_input.value
    if (solution.length > 0) {
      WebGene.run(solution, 100)

      this.setState({
        algorithmState: 'run'
      })
    }
  }

  onProgress (data) {
    this.setState({
      generation: data.generation,
      fittest: data.fittest
    })
  }

  onEnd (data) {
    this.setState({
      generation: data.generation,
      fittest: data.fittest,
      algorithmState: 'end'
    })
  }

  render () {
    return (
      <div className={ this.state.algorithmState } >
        <div>
          <input type='text' ref='solution_input' />
          <button onClick={ this.onRunClick.bind(this) } disabled={ this.state.algorithmState === 'run' }>Run</button>
        </div>

        <p>{ this.state.fittest.solution }</p>
        { this.state.algorithmState === 'end' ? <SolutionComponent generation={ this.state.generation } /> : undefined }

      </div>
    )
  }
}
