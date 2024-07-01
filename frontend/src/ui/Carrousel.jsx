import { useState, useRef, useEffect } from 'react'
import '../styles/carrousel.css'
import { carrousel } from "../helpers/data.js";

export const Carrousel = () => {

const carrouselRef = useRef(null)
const [indexImg, setIndexImg] = useState(0)

useEffect(() => {
const intervalo = setInterval(() => {
setIndexImg(prevIndex => prevIndex +1)
},3000)

return () => clearInterval(intervalo)
},[])

useEffect(()=> {
const carrouselCurrent = carrouselRef.current;
if(indexImg > carrousel.length +1){
  setIndexImg(0)
}
carrouselCurrent.style.transform = `translate(${indexImg * -33.33}%)`
}, [indexImg])


  return (
    <div className="carrousel">
      <div className="contenedor-carrousel" ref={carrouselRef}>
          
        <img src="/img/pexels-pixabay-159213.jpg" alt="Foto carrousel" className='img-carrousel' />
        <img src="/img/pexels-johny-rebel-the-explorer-panda-114076-357271.jpg" alt="Foto Carrousel" className='img-carrousel' />
        <img src="/img/pexels-quang-nguyen-vinh-222549-2132891.jpg" alt="Foto Carrousel" className='img-carrousel' />
      </div>
    </div>
  )
}
