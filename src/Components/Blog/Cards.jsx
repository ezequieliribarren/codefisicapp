import BlogCard from './BlogCard'
import x from "./Cards.module.css"

const Cards = () => {
  return (
    <div className={x.contenedor}>
<BlogCard/>
<BlogCard/>
<BlogCard/>
<BlogCard/>
    </div>
      
      
  )
}

export default Cards