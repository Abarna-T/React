import React,{Component} from 'react'
class Form extends Component{

    constructor(props){
        super(props)
        this.state={
            number:'',
            answer:''
        };
       //  this.clickNumber=this.clickNumber.bind(this);
    }
    clickNumber=event=>
    {
        const value = event.target.value; 
        event.preventDefault();
        // get the value from the target element (button)
        switch (value) {
          case '=': { 
            const answer = eval(this.state.number).toString();
            console.log(answer);
            this.setState({ answer });
            break;
        }
        case 'c': {
            // if it's the Cls sign, just clean our question and answer in the state
            this.setState({ number:''});
            break;
          }
          default: {
            this.setState({ number: this.state.number += value})           
            break;
          }}}
    
    render(){
        return(<div>
            <form>
            <label>Username</label>
            <input type="text" value={this.state.number} onChange={this.clickNumber} ></input>
            <input type="input" value={this.state.answer} onChange={this.clickNumber}></input> 
            <button name="+" value="+" onClick={this.clickNumber} >+</button>
            <button name="2" value="2" onClick={this.clickNumber} >2</button>
            <button name="-" value="c" onClick={this.clickNumber} >-</button>
            <button name="=" value="=" onClick={this.clickNumber}>=</button>
        </form>
        </div>)
    }
}
export default Form
