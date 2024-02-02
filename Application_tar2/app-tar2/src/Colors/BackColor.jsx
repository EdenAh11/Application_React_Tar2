import { Component } from "react"

export default class BackColor extends Component{
constructor(props){
    super(props)

    this.state = {
        color: this.props.color
    };
}

btnClick = (e) =>{
    this.setState({color: e.target.value })
}

    

    render(){
        return(
            <div style={{backgroundColor:this.state.color,border:"solid 1px"}}>
            <br />
            <input type="button" value={"Green"} style={{width:"75%"}} onClick={this.btnClick}></input>
            <br /> <br />
            <input type="button" value={"Blue"}style={{width:"75%"}} onClick={this.btnClick}></input>
            <br /> <br />
            <input type="button" value={"Yellow"}style={{width:"75%"}}onClick={this.btnClick}></input>
            <br /> <br />
            <input type="button" value={"Red"} style={{width:"75%"}}onClick={this.btnClick}></input>
            <br /> <br />
            <input type="button" value={"Brown"} style={{width:"75%"}}onClick={this.btnClick}></input>
            <br /> <br />
            <input type="button" value={"Purple"} style={{width:"75%"}}onClick={this.btnClick}></input>
            <br /> <br />
            <input type="button" value={"Gray"} style={{width:"75%"}}onClick={this.btnClick}></input>
            <br /> <br />
               </div>
        );
    }


}