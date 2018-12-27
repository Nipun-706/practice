import React from 'react';
//import React, { Component } from 'react';
//import './Card.css';
const Card=({name,email,id,image})=>{

return (

	<div className='tc bg-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
<img alt='fmember' src={image} width="200" height="200"/>
<div>
<h2>{name}</h2>
<p>{email}</p>
</div>

</div>
	);
}
export default Card;