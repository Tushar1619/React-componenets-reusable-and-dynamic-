
import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
// function Hi() {
//   return <div>Hello World!</div>;
// }

// Using Props as Arguments to a React Component 

// es5 ka tareeka hai ye 
// function Hi(props){
//   return <div>
//     <p>Hello World and {props.person.name} {props.person.lastName}!</p>
//     <p>Marrital Status : {props.married}</p> 
//     <p>Height : {props.height}</p>
//   </div>
// }
// ReactDOM.render(<Hi person={{name:"Tushar",lastName:"Rai"}} married={true} height={181} />, document.querySelector('#root'));

// es6 ka tareeka props ko lene ka

// function Hi({name,num,guy}){
//   return <div>
//     Hello World! My name is {name} {guy} {num}
//   </div>
// }

// ReactDOM.render(<Hi name = "tUSHAR" num={13} guy={false}/>, document.querySelector('#root'));

// es6 ka tareeka fn likhne ka 

// 1} tareeka 
// const Hi = ({name,num,guy})=>{
//    return <div>My name is {name} {num}</div>
// }

// 2} tareeka 
// const Hi = ({name,num})=><div>My name is {name} {num}</div>

// 3} tareeka if parenthesis is used than return lagane ki zarurat nahi hai
// const Hi = ({name,num})=>(
// <div>My name is {name} {num}</div>
// )

// ReactDOM.render(<Hi name = "tUSHAR" num={13} guy={false}/>, document.querySelector('#root'));

// Activity
const MediaCard = ({title,body,imageUrl}) => (
  <div className='setBorder'>
    <h2 className='textCenter'>{title}</h2>
    <p className='textCenter'>Tesla has a solid boooody of {body}</p>
    <img className='setImage imgCenter' src={imageUrl} alt=""/>
  </div>
)

const MediaPage = ()=>(
  <>
   <MediaCard 
  title="Tesla" 
  body="metal" 
  imageUrl="https://stimg.cardekho.com/images/carexteriorimages/930x620/Tesla/Model-X/5253/1611841733029/front-left-side-47.jpg"/>
   <MediaCard 
  title="BMW" 
  body="Carbon" 
  imageUrl="https://imgd.aeplcdn.com/370x208/n/sva5i4a_1521691.jpg?q=75"/>
   <MediaCard 
  title="Buggati" 
  body="Silicon" 
  imageUrl="https://media.wired.com/photos/5b806816be2f8d3a624b77c9/191:100/w_1280,c_limit/DIVO1.jpg"/>
  </>
)

ReactDOM.render(
  <MediaPage/>
  , document.querySelector('#root'));
