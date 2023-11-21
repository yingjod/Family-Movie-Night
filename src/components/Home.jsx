import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <section className="centred">
      <Link to="/games" className='btn btn-pink'>View Hot Games</Link>
    </section>
  )
}