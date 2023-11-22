import { useLoaderData, Link } from 'react-router-dom'


//! Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function GameSingle() {
  const games = useLoaderData()
  const expansions = games.expansions
  const { gameId, image, name, yearPublished, description } = games

  if (!games) {
    return <div>Loading...</div>;
  }

  // console.log(expansions)
  console.log(gameId, image, name, yearPublished, description)

  return (
    <Container fluid className='games-single'>
      < Row >
        {image && (
          <Col md={6} className='single-image' style={{ backgroundImage: `url("${image}")` }}></Col>
          // <img src={image} />
        )}
        <Col md={6} className='single-detail text-center'>
          <h1 className='text-center bold display-3 mb-4'>{name}</h1>
          <p>{yearPublished}</p>
          <p>{description}</p>
          <p style={{ fontWeight: `bold` }} >Expansions availables:</p>
          <div >{expansions.map(game => {
            const { gameId, name } = game
            return (
              <Row
                className="games-list"
                as={Link}
                key={gameId}
                to={`/games/${gameId}`}
              >
                {name}
              </Row>
            )
          })}</div>
        </Col>
      </Row >
    </Container >
  )
}