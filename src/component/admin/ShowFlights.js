import React, { Component } from 'react'

class ShowFlights extends Component {
  constructor(props) {
    super(props)
  
    var flightList = JSON.parse(localStorage.getItem('flightData'))
    if (flightList){
      this.state = {
        flightList: flightList
      }
    }
    else{
      this.state ={
        flightList: []
      }
    }
  }

  render(){
    return (
      <div>
        <table className="table table-striped table bordered table-hover table-dark">
          <caption className="text-center"> List of Flights</caption>
          <thead>
            <tr className="text-center">
              <th>Flight Name</th>
              <th>Source</th>
              <th>Destination</th>
              <th>Depurture</th>
              <th>Arrival</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.flightList.map((flight)=>
              <tr key={flight.id} className="text-center">
                <td>{ flight.FlightName}</td>
                <td>{ flight.Source }</td>
                <td>{ flight.Destination }</td>
                <td>{ flight.DepurtureTime }</td>
                <td>{ flight.ArrivalTime }</td>
                <td> Rs. { parseFloat(flight.Price, 10).toFixed(2)}</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default ShowFlights
