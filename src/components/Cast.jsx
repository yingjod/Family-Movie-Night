import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom'


//! Bootstrap Components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Cast() {
  const cast = useLoaderData()

  //!JSX
  return (
    <>
      <main>
        <Container fluid>
          <Row className="shows-list">
            {cast
              .sort((a, b) => a.person.name.localeCompare(b.person.name))
              .map(person => {
                const { person: { name }, person: { id }, person: { url }, person: { image:{medium} } } = person
                const character = person.character.name
                return (
                  <Col
                    as={Link}
                    key={id}
                    xs={4}
                    s={3}
                    md={3}
                    lg={2}
                    xl={2}
                    to={url}
                  >

                    <div className="rails">
                      <img className="thumbnail" src={medium} />
                      <p className="movietittle">{name}</p>
                      <p className="movietittle">as: {character}</p>
                    </div>
                  </Col>
                )
              })}
          </Row>
        </Container>
      </main >
    </>
  )
}

