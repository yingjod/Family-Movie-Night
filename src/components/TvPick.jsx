import { useLoaderData } from 'react-router-dom'


//! Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TvPick() {
  const shows = useLoaderData()
  const { id, name, summary, language, runtime, genres, rating: { average }, image: { original } } = shows
  console.log(id, name, summary, original, language, runtime, average, genres)

  //! Functions
  function createSummaryMarkup() {
    return { __html: `${summary}` };
  }

  //!JSX
  return (
    <Container fluid className='shows-single'>
      < Row >
        {original && (
          <Col md={6} className='single-image' style={{ backgroundImage: `url("${original}")` }}></Col>
          // <img src={image} />
        )}
        <Col md={6} className='single-detail text-center'>
          <h1 className='text-center bold display-3 mb-4'>{name}</h1>
          <div dangerouslySetInnerHTML={createSummaryMarkup()} />
          <div>Language: {language}</div>
          <div>Runtime: {runtime} minutes</div>
          <div>Rating: {average}</div>
          <div>Genres: {genres.join(' | ')}</div>
        </Col>
      </Row >
    </Container >
  )
}

