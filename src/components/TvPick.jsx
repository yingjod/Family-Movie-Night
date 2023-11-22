import { useLoaderData } from 'react-router-dom'


//! Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TvPick() {
  const shows = useLoaderData()
  const { id, name, summary, image: { original } } = shows
  console.log(id, name, summary, original)

  //! Functions
  function createSummaryMarkup() {
    return { __html: `${summary}` };
  }

  //!JSX
  return (
    <Container fluid className='games-single'>
      < Row >
        {original && (
          <Col md={6} className='single-image' style={{ backgroundImage: `url("${original}")` }}></Col>
          // <img src={image} />
        )}
        <Col md={6} className='single-detail text-center'>
          <h1 className='text-center bold display-3 mb-4'>{name}</h1>
          <div dangerouslySetInnerHTML={createSummaryMarkup()} />
        </Col>
      </Row >
    </Container >
  )
}

