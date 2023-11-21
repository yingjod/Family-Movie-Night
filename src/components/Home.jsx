import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="centred">
      <Link to="/bread" className='btn btn-pink'>View bread</Link>
    </section>
  )
}