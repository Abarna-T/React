import React,{Component} from 'react';
import './styles.css';

class Calculator extends Component{
    constructor(props)
    {
        super(props)
        this.state={input:'',answer:''};
    }
    inputCollect=(event)=>{
        const value=event.target.value;
        // console.log(value);

        //this.state.input=this.state.input+value

        event.preventDefault();
        this.setState({input:this.state.input+=value})
    }
    evaluate=()=>{
        const res=(eval(this.state.input));
        console.log(res);
        this.setState({answer:res})
    }
    clr=()=>{
        this.setState({answer:'',input:''})
    }
render(){
    return(
        <div id="container">
            <div id="content">
                <h1>Calculator</h1>
            <div id="inputs">
                <input type="input" value={this.state.input} id="input1" onChange={this.inputCollect}></input>
                <input type="input"  value={this.state.answer} onChange={this.evaluate} id="input2"></input>
            </div>
                <div id="table_item">
                <table>
                    <tr>
                    <td><button type="button" value="1" onClick={this.inputCollect}>1</button></td>
                    <td><button type="button" value="2"  onClick={this.inputCollect}>2</button></td>
                    <td><button type="button" value="3"  onClick={this.inputCollect}>3</button></td>
                    <td><button type="button" value="4"  onClick={this.inputCollect}>4</button></td>
                    <td><button type="button" value="+"  onClick={this.inputCollect}>+</button></td>
                    </tr>
                    <tr>
                    <td><button type="button" value="5"  onClick={this.inputCollect}>5</button></td>
                    <td><button type="button" value="6"  onClick={this.inputCollect}>6</button></td>
                    <td><button type="button" value="7"  onClick={this.inputCollect}>7</button></td>
                    <td><button type="button" value="8"  onClick={this.inputCollect}>8</button></td> 
                    <td><button type="button" value="-"  onClick={this.inputCollect}>-</button></td>
                    </tr>
                    <tr>
                    <td><button type="button" value="9"  onClick={this.inputCollect}>9</button></td>
                    <td><button type="button" value="0"  onClick={this.inputCollect}>0</button></td>
                    <td><button type="button" value="/"  onClick={this.inputCollect}>/</button></td>
                    <td><button type="button" value="."  onClick={this.inputCollect}>.</button></td>
                    <td><button type="button" value="*"  onClick={this.inputCollect}>*</button></td>
                    </tr>
                    <tr id="last">
                    <td><button type="button" id="clear" value="Clr"  onClick={this.clr}>Clr</button></td>
                    <td><button type="button" value="="  onClick={this.evaluate}>=</button></td>
                    </tr>
                    
                </table>
               </div>
            </div>
            </div>

    )
}}
export default Calculator;