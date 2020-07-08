import React, { Component } from 'react'
import './FlightSearch.css'
import { Redirect } from 'react-router-dom'

export class FlightSearch extends Component {

  constructor(props) {
    super(props)

    var flightList = JSON.parse(localStorage.getItem('flightData'))
    this.state = {
      source:'',
      destination: '',
      departDate: '',
      returnDate: '',
      adalt: 1,
      child: 0,
      infant: 0,
      class: '',
      flightList: flightList,
      isSubmit: false
    }
  }
  sourceHandler =(event)=>{
    this.setState({source: event.target.value})
  }
  destinationHandler =(event)=>{
    this.setState({destination: event.target.value})
  }
  swapHandle = () => {
    const source = this.state.source
    const destination = this.state.destination
    this.setState({source: destination, destination: source })
  }
  departDateHandler =(event) => {
    this.setState({departDate: event.target.value})
  }
  returnDateHandler =(event) => {
    this.setState({returnDate: event.target.value})
  }
  adaltIncrease=()=>{
    this.setState({adalt: this.state.adalt + 1})
  }
  childIncrease=()=>{
    this.setState({child: this.state.child + 1})
  }
  infantIncrease=()=>{
    this.setState({infant: this.state.infant + 1})
  }
  adaltDecrease=()=>{
    this.setState({adalt: this.state.adalt - 1})
  }
  childDecrease=()=>{
    this.setState({child: this.state.child - 1})
  }
  infantDecrease=()=>{
    this.setState({infant: this.state.infant - 1})
  }
  classHandler = (event) => {
    this.setState({class: event.target.value},()=>{console.log(this.state.class)})
  }
  totalPassanger=(event)=>{
    return this.state.adalt + this.state.child + this.state.infant
  }
  
  submitHandler=(event) =>{
    this.setState({isSubmit: true})
    event.preventDefault()
  }

  render() {
    if (this.state.isSubmit){
      return <Redirect to={{pathname: 'searchresult', state: this.state}} />
    }
    else{
      return (
        <div>
          <div className="page-wrapper">
            <div className="wrapper">
              <div className="card">
                <div className="card-body">
                  <form onSubmit = {this.submitHandler}>
                    <div className="form-group row">
                      <div className="col-12 col-md-5">
                        <div>
                          <label className="label">Depart From </label>
                        </div>
                        <div>
                          <input type="text" className = "form-control" value={this.state.source} onChange={this.sourceHandler}/>
                        </div>
                      </div>
                      <div className="col-12 col-md-2" onClick={this.swapHandle}>
                        <h2 className="text-center">-></h2>
                      </div>
                      <div className="col-12 col-md-5">
                        <div>
                          <label className="label">Going To</label>
                        </div>
                        <div>
                          <input type="type" className = "form-control" value={this.state.destination} onChange={this.destinationHandler}/>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 col-md-6">
                        <div className="form-group row">
                          <label className="col-12 col-sm-4 col-md-4 col-form-label">Depart Date</label>
                          <div className="col-12 col-sm-8 col-md-8">
                            <input type="date" className = "form-control" value={this.state.departDate} onChange={this.departDateHandler} placeholder="Enter source airport"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="form-group row">
                          <label className="col-12 col-sm-4 col-md-4 col-form-label">Return Date</label>
                          <div className="col-12 col-sm-8 col-md-8">
                            <input type="date" className = "form-control" value={this.state.rerurnDate} onChange={this.returnDateHandler} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5>{this.totalPassanger()}</h5>
                    <div className="form-group row">
                      <label className="col-12 col-sm-4 col-md-2 col-form-label">Traveler</label>
                      <div className="col-12 col-sm-8 col-md-10">
                        <div className="row">
                          <div className="col-12 col-sm-4">
                            <div>
                              <label>Adalt</label>
                            </div>
                            <div>
                              <button 
                                type="button" 
                                className="minus-button" 
                                disabled={ this.state.adalt <= 0} 
                                onClick={this.adaltDecrease}>-
                              </button>
                              <span className="traveller-value">{this.state.adalt}</span>
                              <button 
                                type="button" 
                                className="plus-button"
                                disabled={ this.state.adalt >= 6 || this.totalPassanger() >= 6} 
                                onClick={this.adaltIncrease}>+
                              </button>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div>
                              {this.state.child <= 1 && <label>Child</label>}
                              {this.state.child >= 2 && <label>Children</label>}
                              <small> (2 - 12 Years)</small>
                            </div>
                            <div>
                              <button 
                                type="button" 
                                className="minus-button" 
                                disabled={ this.state.child <= 0}  
                                onClick={this.childDecrease}>-
                              </button>
                              <span className="traveller-value">{this.state.child}</span>
                              <button 
                                type="button" 
                                className="plus-button" 
                                disabled={ this.state.child >= 6 || this.totalPassanger() >= 6} 
                                onClick={this.childIncrease}>+
                              </button>
                            </div>
                          </div>
                          <div className="col-12 col-sm-4">
                            <div>
                              <label>Infant</label>
                              <small> (below 2 Years)</small>
                            </div>
                            <div>
                              <button 
                                type="button" 
                                className="minus-button" 
                                disabled={ this.state.infant <= 0} 
                                onClick={this.infantDecrease}>-
                              </button>
                              <span className="traveller-value">{this.state.infant}</span>
                              <button 
                                type="button" 
                                className="plus-button" 
                                disabled={ this.state.infant >= 6 || this.totalPassanger() >= 6} 
                                onClick={this.infantIncrease}>+
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-12 col-sm-4 col-md-2 col-form-label">Class</label>
                      <div className="col-12 col-sm-8 col-md-10">
                        <div className="row">
                          <div className="col-12">
                            <input type="radio" value="economy" onChange={this.classHandler} name="class"/> Economy
                          </div>
                          <div className="col-12">
                            <input type="radio" value="peconomy" onChange={this.classHandler} name="class"/> Premium Economy
                          </div>
                          <div className="col-12">
                            <input type="radio" value="business" onChange={this.classHandler} name="class"/> Business
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-12 text-center">
                        <button type="submit" className="btn btn-danger btn-lg search-button" onClick={this.submithandler}>SEARCH</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* {this.state.isSubmit && <Redirect to={{pathname: 'searchresult', state: this.state}} />} */}
        </div>
      )
    }
  }
}

export default FlightSearch
