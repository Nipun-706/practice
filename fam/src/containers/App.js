import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import {familymember} from '../familymember';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';


class App extends Component {

constructor(){  super() 

	this.state={
//robots:[],
	familymember:[],
searchfield:''
}      

}
componentDidMount(){

// //API
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response=> response.json())
// .then(users=> this.setState({robots:users}));
	this.setState({familymember:familymember})
}

onSearchChange=(event)=>{  
this.setState({searchfield:event.target.value})

 }

render(){

const {familymember, searchfield}=this.state;
const filteredfamilymember=familymember.filter(familymember=>{

return (familymember.name.toLowerCase().includes(searchfield.toLowerCase())
);
})

return !familymember.length ? <h1>Loading</h1>: 
(
<div className='tc'>
<h1 className='f1 avenir gold bw2 shadow-5'>My family</h1>
<SearchBox searchChange={this.onSearchChange}/>
<Scroll>
<ErrorBoundry>
		<Cardlist familymember={filteredfamilymember}/> 
</ErrorBoundry>
</Scroll>
		</div>

		);

}
}
export default App;

