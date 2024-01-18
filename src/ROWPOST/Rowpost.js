import React,{useEffect,useState} from 'react'
import'./Rowpost.css'
import { API_KEY,imageUrl} from '../Constants/Constant';
import axios from '../axios'
import YouTube from 'react-youtube';


function Rowpost(props) {
  const [movies,setMovie]=useState([])
  const[urlid,setUrltId]=useState('')

  const handleclick=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
    if(response.data.results.length!==0){
      setUrltId(response.data.results[0])
    }else{
      console.log('array empty')
    }
  })

  }
  useEffect(()=>{
    axios.get(props.url).then(response => {
      console.log(response.data)
      setMovie(response.data.results)
    }).catch(err=>{
      alert('network error')
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay:1,
    },
  };
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={()=>handleclick(obj.id)} className={props.issmall ?'smallposter':'poster'} alt='poster'src={`${imageUrl+obj.backdrop_path}`}/>
          )}
        </div>
       { urlid && <YouTube  opts={opts}videoId={urlid.key}/>}
    </div>
  )
}

export default Rowpost