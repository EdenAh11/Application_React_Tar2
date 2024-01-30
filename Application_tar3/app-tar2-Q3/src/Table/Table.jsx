import { Component } from "react"

export default class Table extends Component{
constructor(props){
    super(props)

    this.state = {
        w :this.props.width
    }
  
}
    
    btnClick = () =>{
        this.setState({w : "50%"})
    }

    dbClick = () =>{
        this.setState({w : "100%"});
       

    }
  

    

    render(){
        return(
            <div>
                <table style={{borderCollapse: "collapse",width:this.state.w,marginTop:0}}>
                    <tr>
                        <td style={{border:"solid 2px",padding:"20%"}} onClick={this.btnClick} onDoubleClick={this.dbClick}></td>
                        <td style={{border:"solid 2px",padding:"20%"}} onClick={this.btnClick} onDoubleClick={this.dbClick}></td>
                        <td style={{border:"solid 2px",padding:"20%"}} onClick={this.btnClick} onDoubleClick={this.dbClick}></td>
                    </tr>
                    <tr>
                    <td style={{border:"solid 2px",padding:"20%"}} onClick={this.btnClick} onDoubleClick={this.dbClick}></td>
                    <td style={{border:"solid 2px",padding:"20%"}} onClick={this.btnClick} onDoubleClick={this.dbClick}></td>
                    <td style={{border:"solid 2px",padding:"20%"}} onClick={this.btnClick} onDoubleClick={this.dbClick}></td>
                  </tr>
                  
                </table>
            </div>
        );
    }


}