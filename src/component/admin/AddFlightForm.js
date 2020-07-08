import React, { Component } from 'react';
// import TimeInput from 'material-ui-time-picker'
import './addFlightForm.css'

class AddFlightForm extends Component {
   
  constructor(props) {
    super(props)
  
    this.state = {
      id: "",
      FlightName: "",
      DepurtureTime: "",
      ArrivalTime: "",
      Source: "",
      Destination: "",
      Price: 0,
      data:[]
    }
  }

  FlightNameHandler = (event) => {
    this.setState({FlightName: event.target.value})
  }

  DepurtureTimeHandler = (event) => {
    this.setState({DepurtureTime: event.target.value})
  }

  ArrivalTimeHandler = (event) => {
    this.setState({ArrivalTime: event.target.value})
  }

  SourceHandler = (event) => {
    this.setState({Source: event.target.value})
  }

  DestinationHandler = (event) => {
    this.setState({Destination: event.target.value})
  }

  PriceHandler =(event)=>{
    this.setState({Price: event.target.value})
  }

  submitHandler = (event) => { 
    const {FlightName, DepurtureTime, ArrivalTime, Source, Destination, Price} = this.state
    const newData = {
      id: Date.now(), 
      FlightName: FlightName, 
      DepurtureTime: DepurtureTime,
      ArrivalTime: ArrivalTime,
      Source: Source, 
      Destination: Destination,
      Price: Price
    }
    let data = [...this.state.data, newData]
    this.setState({
      id: "",
      FlightName: "",
      DepurtureTime: "",
      ArrivalTime: "",
      Source: "",
      Destination: "",
      Price: 0,
      data: data},
      () => {localStorage.setItem("flightData", JSON.stringify(this.state.data))
    })
    event.preventDefault()
  }
  
  Cancelhandler = () =>{
    this.setState({
      id: "",
      FlightName: "",
      DepurtureTime: 0,
      ArrivalTime: 0,
      Source: "",
      Destination: "",
      Price: ""
    })
  }

  render() {
    return (
      <div>
        <div className="page-wrapper">
          <div className="wrapper">
            <div className="card">
              <div className="card-body">
                <form onSubmit = {this.submitHandler}>
                  <div className="form-group row">
                    <label className="col-12 col-sm-4 col-md-2 col-form-label">Flight Name : </label>
                    <div className="col-12 col-sm-8 col-md-10">
                      <input type="text" className = "form-control" value={this.state.FlightName} onChange={this.FlightNameHandler} placeholder="Enter flight name"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-12 col-md-6">
                      <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-form-label">Depurture : </label>
                        <div className="col-12 col-sm-8 col-md-8">
                          <input type="time" className = "form-control" value={this.state.DepurtureTime} onChange={this.DepurtureTimeHandler}/>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group row">
                        <label className="col-12 col-sm-4 col-md-4 col-form-label">Arrival : </label>
                        <div className="col-12 col-sm-8 col-md-8">
                          <input type="time" className = "form-control" value={this.state.ArrivalTime} onChange={this.ArrivalTimeHandler}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-12 col-sm-4 col-md-2 col-form-label">Source : </label>
                    <div className="col-12 col-sm-8 col-md-10">
                      <input type="text" className = "form-control" value={this.state.Source} onChange={this.SourceHandler} placeholder="Enter source airport"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-12 col-sm-4 col-md-2 col-form-label">Destination : </label>
                    <div className="col-12 col-sm-8 col-md-10">
                      <input type="text" className = "form-control" value={this.state.Destination} onChange={this.DestinationHandler} placeholder="Enter destination airport"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-12 col-sm-4 col-md-2 col-form-label">Price : </label>
                    <div className="col-12 col-sm-8 col-md-10">
                      <input type="text" className = "form-control" value={this.state.Price} onChange={this.PriceHandler} placeholder="eg. 5000.00"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-12 col-sm-6">
                      <button type="button" className="btn btn-danger btn-lg btn-block" onClick={this.Cancelhandler}>Cancel</button>
                    </div>
                    <div className="col-12 col-sm-6">
                      <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={this.submithandler}>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AddFlightForm