import React from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from "react-redux";
import { fetch_exchange_rates } from "./store/profile.action";

class PageFour extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          rates: []
        };
      }

    componentDidMount() {
        this.props.dispatch(fetch_exchange_rates());
    }

    render() {
      return (
        <div className="container">
        <div style={{textAlign: "left", margin: "20px 0px 10px 0px"}}>
            <strong>US Dollar (USD) Exchange Rates</strong>
        </div>
        <Table bordered hover>
        <thead style={{background: "#dee2e661"}}>
            <tr>
            <th>Currency</th>
            <th>Currency Name</th>
            <th>Exchange Rate = 1 USD</th>
            </tr>
        </thead>
        <tbody>
        {(this.props.data.ratesReducer.data).map((data, index) => (
            <tr key={index}>
                <td>{data.name}</td>
                <td>{data.text}</td>
                <td>{data.rate}</td>
            </tr>
        ))}
        </tbody>
        </Table>
        <div style={{height: "100px"}}>
        </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => {
    return {
      data: state
    };
  };
export default connect(mapStateToProps)(PageFour);