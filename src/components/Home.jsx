import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="centred">
      <Link to="/shows" className='btn btn-pink'>View All Shows</Link>
    </section>
  )
}