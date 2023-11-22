import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom'

//! Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const shows = useLoaderData()

  const showList = [...new Set(shows)].filter(show =>{
    return show.genres.includes("Family")
  }
  )

  console.log(showList)
  const index = Math.floor(Math.random() * showList.length)
  const randomPick = showList[index]
  const name = randomPick.name
  const image = randomPick.image.original
  const id = randomPick.id

  //!JSX
  return (
    <Container fluid className='shows-single'>
      < Row >
        {image && (
          <Col
            as={Link}
            key={id}
            md={6}
            className='single-image'
            style={{ backgroundImage: `url("${image}")` }}
            to={`/shows/${id}`}>
          </Col>
          // <img src={image} />
        )}
        <Col md={6} className='single-detail text-center'>
          <h1 className='text-center bold display-3 mb-4'>{name}</h1>
        </Col>
      </Row >
    </Container >
  )
}



