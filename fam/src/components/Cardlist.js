import React from 'react';
import Card from './Card';
const Cardlist=({familymember})=>{
	
return(
	<div>
{
familymember.map((user,i)=>{

return(<Card key={i}
id={familymember[i].id} 
name={familymember[i].name} 
email={familymember[i].email} 
image={familymember[i].image}
/>);
	})
}

</div>	
	);
}
export default Cardlist;