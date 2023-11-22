import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom'

//! Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TvIndex() {
  const shows = useLoaderData()
  console.log(shows)

  //! JSX
  return (
    <>
      <main>
        <h1 className="text-center bold display-3 mb-4">Shows List</h1>
        <Container fluid>
          <Row className="shows-list">
            {shows.map(show => {
              const { id, name, image: {medium} } = show
              return (
                <Col
                  as={Link}
                  key={id}
                  xs={4}
                  s={3}
                  md={2}
                  lg={2}
                  xl={1}
                  style={{ backgroundImage: `url("${medium}")` }}
                  to={`/shows/${id}`}
                >
                  {/* <div style={{ backgroundImage: `url("${medium}")` }}></div> */}
                  <p>{name}</p>
                </Col>
              )
            })}
          </Row>
        </Container>
      </main>
    </>
  )
}