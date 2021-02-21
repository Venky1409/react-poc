import React from 'react';
import { connect } from "react-redux";
import { CURRENCY_OPTIONS as currencyDetails } from './currenciesData';
import { get_conversion_rates, get_initial_rates } from "./store/profile.action";

class PageFive extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
            selectFromValue: undefined,
            selectFromInputValue: undefined,
            selectToValue: undefined,
            selectFromSymbol: '',
            selectToSymbol: ''
        };
      }

    componentDidMount() {
        this.props.dispatch(get_initial_rates());
    }

    handleFromValueChange(e) {
        this.setState({selectFromValue:e.target.value});
        this.setState({selectFromSymbol:e.target.selectedOptions[0].title});
        if (this.state.selectToValue == e.target.value) {
            alert('Please provide different country codes');
            return;
        }
        if (e.target.value && this.state.selectToValue && this.state.selectToValue) {
            this.props.dispatch(get_conversion_rates(e.target.value, this.state.selectToValue, this.state.selectFromInputValue));
        }
    }

    handleToValueChange(e) {
        this.setState({selectToValue:e.target.value});
        this.setState({selectToSymbol:e.target.selectedOptions[0].title});
        if (e.target.value == this.state.selectFromValue) {
            alert('Please provide different country codes');
            return;
        }
        if (this.state.selectFromValue && e.target.value && this.state.selectToValue) {
            this.props.dispatch(get_conversion_rates(this.state.selectFromValue, e.target.value, this.state.selectFromInputValue));
        }
    }

    updateInputValue(e) {
        if (this.state.selectToValue == this.state.selectFromValue) {
            alert('Please provide different country codes');
            return;
        }
        this.setState({selectFromInputValue: e.target.value});
        this.props.dispatch(get_conversion_rates(this.state.selectFromValue, this.state.selectToValue, e.target.value));
      }


    render() {
      return (
        <div className="container">
        <div style={{textAlign: "left", margin: "20px 0px 10px 0px", fontSize: "20px"}}>
            <strong>Currency converter</strong><br></br>
        </div>
        <div style={{textAlign: "left", marginBottom: "15px"}}>Please enter the amount you want to convert in any field.</div>
        <div id="grid">
            <div>
            <div className="form-group">
            <label>Currency</label>
            <select className="form-control" value={this.state.selectFromValue} onChange={this.handleFromValueChange.bind(this)}>
                <option value="" title="">Please select</option>
                {(currencyDetails).map((data) => (
                    <option value={data.value} title={data.symbol}>{data.text} ({data.value})</option>
                ))}
            </select>
            </div>
            <div className="form-group">
                <label>Enter amount</label>
                <input type="number" className="form-control" value={this.state.selectFromInputValue} onChange={this.updateInputValue.bind(this)} />
                <span className="currencySymbol">{this.state.selectFromSymbol}</span>
            </div>
            </div>

            <div>
            <div className="form-group">
            <label>Currency</label>
            <select className="form-control" value={this.state.selectToValue} onChange={this.handleToValueChange.bind(this)}>
                <option value="" title="">Please select</option>
                {(currencyDetails).map((data) => (
                    <option value={data.value} title={data.symbol}>{data.text} ({data.value})</option>
                ))}
            </select>
            </div>
            <div className="form-group">
                <label>Enter amount</label>
                <input type="text" className="form-control" readonly="readonly"  value={this.props.data.conversionReducer.data.selectFromOutputValue} />
                <span className="currencySymbol">{this.state.selectToSymbol}</span>
            </div>
            </div>
        </div>
        <div id="gridText"> 
            <div>{this.props.data.conversionReducer.data.selectFromText}</div>
            <div>{this.props.data.conversionReducer.data.selectToText}</div>
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
export default connect(mapStateToProps)(PageFive);