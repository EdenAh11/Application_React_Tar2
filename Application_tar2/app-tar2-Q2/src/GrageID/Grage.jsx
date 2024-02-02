import { Component } from "react"

export default class Grade extends Component{
constructor(props){
    super(props)

    this.state ={
    p1 : null,
    p2 : null,
    p3 : null,
    p4 : null
    };
}
    
    FCRequiere = (e) => {
        this.setState({p4: null})

        if(e.target.id == 1)
        {
        this.setState({p1 :<p style={{fontSize:9,color:"red",marginBottom:0}}>*Please Enter {e.target.placeholder}</p>});
        }
        else if(e.target.id == 2){
         this.setState({p2 :<p style={{fontSize:9,color:"red",marginBottom:0}}>*Please Enter {e.target.placeholder}</p>});
        }
        else if(e.target.id == 3)
        {
         this.setState({p3 :<p style={{fontSize:9,color:"red",marginBottom:0}}>*Please Enter {e.target.placeholder}</p>});
        }
    }
    FCResetR = (e) => {
        
        if(e.target.id == 1)
        {
        this.setState({p1: null});
        }
        else if(e.target.id == 2)
        {
        this.setState({p2: null});
        }
        else if(e.target.id == 3){
            this.setState({p3: null});
            let number = parseInt(e.target.value);
            if(number > 555){
                this.setState({p4: <p style={{fontSize:14,color:"green",marginBottom:0}}>Pass - Accepted for studies This year</p>})
            }
            else{
                this.setState({p4: <p style={{fontSize:14,color:"red",marginBottom:0.}}>Faild - Try it again next year</p>})
            }
        }
    }

    

    render(){
        return(
            <div style={{border:"solid 1px"}}>
                <form style={{margin:10}}>
                    
                    {this.state.p1}
                First Name: <input type="text" id="1" placeholder="First name" onFocus={this.FCRequiere} onBlur= {this.FCResetR} style={{marginBottom:5}} required></input>
                <br />
                    {this.state.p2}
                Last Name: <input type="text" id="2" placeholder="Last name" onFocus={this.FCRequiere} onBlur= {this.FCResetR} style={{marginBottom:5}} required></input>
                <br />
                     {this.state.p3}
               Psy Grade: <input type="number" id="3" placeholder="Grade" onFocus={this.FCRequiere} onBlur= {this.FCResetR} style={{marginBottom:5}} required></input>
                    {this.state.p4}
                <br />
                </form>
               </div>
        );
    }


}