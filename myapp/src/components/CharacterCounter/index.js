import {Component} from 'react'

import {v4 as uniqueId} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {
    searchInput: '',
    wordsList: [],
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onAddCharacter = () => {
    const {searchInput} = this.state
    this.setState(prevState => ({
      wordsList: [...prevState.wordsList, searchInput],
      searchInput: '',
    }))
  }

  onSubmitForm = event => {
    event.preventDefault()
  }

  render() {
    const {wordsList, searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="yellow-container">
          <div className="yellow-top-container">
            <h1 className="heading">Count the characters like a Boss..</h1>
          </div>
          <div className="yellow-bottom-container">
            {wordsList.length > 0 ? (
              <ul className="ul-list">
                {wordsList.map(each => (
                  <li key={uniqueId()} className="each-list">
                    <p className="">{each}</p>
                    <p className=""> : {each.length}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <img
                className="img"
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
              />
            )}
          </div>
        </div>
        <div className="black-container">
          <h1 className="counter-heading">Character Counter</h1>
          <form onSubmit={this.onSubmitForm}>
            <div className="input-button-container">
              <div className="input-container">
                <input
                  type="text"
                  className="input"
                  placeholder="Enter the Characters here"
                  value={searchInput}
                  onChange={this.onChangeInput}
                />
              </div>
              <div className="button-container">
                <button
                  onClick={this.onAddCharacter}
                  type="submit"
                  className="button"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
