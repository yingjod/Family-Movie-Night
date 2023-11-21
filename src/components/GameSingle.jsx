import { useLoaderData } from 'react-router-dom'
// import { Link } from 'react-router-dom'

// Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function gamesSingle() {
  const games = useLoaderData()
  console.log(games)
  const { gameId, image, name, yearPublished, destription, expansions: { expName, expId } } = games
  console.log(gameId, image, name, yearPublished, destription, expName, expId)

  return (
    <Container fluids className='games-single'>
      < Row >
        <Col md={6} className='single-games' style={{ backgroundImage: `url(${image})` }}> </Col>
        <Col md={6} className='single-detail text-center'>
          <h1 className='text-center bold display-3 mb-4'>{name}</h1>
          <p>{yearPublished}</p>
          <p>{destription}</p>
          <p>Expensions: {expName}</p>
        </Col>
      </Row >
    </Container >
  )
}