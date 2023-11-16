// import React from 'react'

// import ReactPlayer from 'react-player'
// const Body = () => {
//   return (
//     <div>
       
//         <ReactPlayer url={'https://www.youtube.com/watch?v=ODLiJ2_CGXI'}controls/>
//         <ReactPlayer src={'ram.mp4'}controls/>
//     </div>
//   )
// }

// export default Body

// import React,{useState} from 'react'
// import Image from './ramy.jpg'
// const Body = () => {
//     const[likes,setLikes]=useState(0)
//     function count()
//     {
//         setLikes(likes+1);
//     }
//   return (
//     <div>
//         <img src={Image} alt="images" width={200} height={200}/><br/>
//         <p>likes : {likes}</p>
//         <button onClick={count}>like</button>
//     </div>
//   )
// }

// export default Body



import React,{useState} from 'react'
 import Image from './ramy.jpg'
//  import Video from './ram.mp4'
 import ReactPlayer from 'react-player'
  
 
 import './bbody.css'

 const Body = () => {
   const[likes,setLikes]=useState(0)
   const[text,setText]=useState('')
   const[like,setLike]=useState(0)
   const[fruits,setFruits]=useState([{fruit:'watermelon'} , {fruit:'apple'},{fruit:'orange'}])
   const[index,setIndex]=useState(0)
   const[name,setName]=useState([{namee:'tail of nine tailed'},{namee:'descendents of the sun'},{namee:'true beauty' }])
       function count()
   {
        setLikes(likes+1);
   }
   function reset()
   {
    setText('');
   }
   function ccount()
   {
    setLike(like+1);
   }
   function change()
   {
    const newIndex=(index+1)%fruits.length
    setIndex(newIndex)

   }
 
  return (
       <div id='whole'>


         <div id='imag'>
         <img src={Image} alt="images" width={200} height={200}/><br/>
         <p id='info'>An image is a visual representation of something. An image can be a two-dimensional (2D) representation, such as a drawing, painting, or photograph, or a three-dimensional (3D) object</p>
         <p>likes : {likes}</p>
         <button onClick={count}>like</button> 
         <br/>
         <br/>
         <br/>
         <label htmlFor="name">comment : </label>
         <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
         <p>comment : {text}</p>
         <button onClick={reset}>Reset</button>
         <br/>  
         </div>


         <div id='video'>  
         <ReactPlayer url={'https://youtu.be/791Q7-fE_IU'} controls/>
        {/* <video src={Video} controls width={200}height={200}/><br/> */}
         <div id='txt'>
         <p>tittle: {name[index].namee}
             </p>
             
         <button onClick={change}>change</button> </div>
         
         <p>likes : {like}</p>
         <button onClick={ccount}>like</button><br/>
         <label htmlFor="name">comment : </label>
         <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
         <p>comment : {text}</p>
         <button onClick={reset}>Reset</button>
         <br/>
         </div>
         
          {/* <div id='fruit'>
         <p>i like  {fruits[index].fruit}</p>
            <button onClick={change}>change</button>
         </div>   */}
        </div> 
     
   )
}

export default Body
