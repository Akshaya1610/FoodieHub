import React from "react";

class ExampleClass extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.name + " constructor called");

        this.state ={
            count : 0,
            counter: 2,
        }

    }
    componentDidMount(){
        console.log(this.props.name + " componentDidMount called");
    }
    render(){
        const { count, counter} = this.state
        console.log(this.props.name + " render called");
        return(
            <div>
                <h1>Hello class Component</h1>
                <h2>{this.props.name}</h2>
                <h2>count : {count}</h2>
                <button  className="btn"
                    onClick={ () => {
                        this.setState({
                              count : this.state.count +1,
                            
                        })
                    }
                        
                    }
                >count</button>
        
            </div>
        )
    } 
}


export default ExampleClass;