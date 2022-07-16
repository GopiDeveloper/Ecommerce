import React,{Component} from 'react';
import QuickDisplay from './QuickDisplay';
import './Home.css';
const resUrl = "https://fakestoreapi.com/products/"

class Home  extends Component {
    constructor(props) {
        super(props);
        this.state={
            location:'',
           
        };
    }
    render() {
        return(
            <>
                <div className="container">
                    <QuickDisplay quickData={this.state.location}/>
                </div>    
            </>
        )
    }


    componentDidMount(){
        fetch(resUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Home;