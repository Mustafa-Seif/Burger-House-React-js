import './Products.css'


import data from '../../data'

const Products = () => {
  const product = data.product
  return (
    <section className='Products container'>
      <h1>CHOOSE & ENJOY</h1>
      <p>lorem ti rom decus do then about our product, lorem ti rom decus do then</p>
      <div className='Products-card'>
      {product.map((pro)=>
        (
          <div className='card-burger' key={pro.id}>
          <img src={pro.img} alt="burger"   className='burger'/>
          <p>{pro.title}</p>
          <button>{pro.button}</button>
        </div>
        )
      )}
        
      </div>
    </section>
  )
}

export default Products