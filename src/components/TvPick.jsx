import { useLoaderData, Link } from 'react-router-dom'


//! Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TvPick() {
  const shows = useLoaderData()
  const { id, image, name, description, image:{original} } = shows

  if (!shows) {
    return <div>Loading...</div>;
  }

  // console.log(expansions)
  console.log(id, image, name, description, original)

  return (
    <Container fluid className='games-single'>
      < Row >
        {image && (
          <Col md={6} className='single-image' style={{ backgroundImage: `url("${original}")` }}></Col>
          // <img src={image} />
        )}
        <Col md={6} className='single-detail text-center'>
          <h1 className='text-center bold display-3 mb-4'>{name}</h1>
          <p>{description}</p>
        </Col>
      </Row >
    </Container >
  )
}

