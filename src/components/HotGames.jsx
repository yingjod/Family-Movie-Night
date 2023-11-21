import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom'

//! Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BreadIndex() {
  const games = useLoaderData()
  console.log(games)


  //! JSX
  return (
    <>
      <main>
        <h1 className="text-center bold display-3 mb-4">Hot Games List</h1>
        <Container fluid>
          <Row className="games-list">
            {games.map(games => {
              const { gameId, name, thumbnail } = games
              return (
                <Col
                  as={Link}
                  key={gameId}
                  xs={6}
                  md={4}
                  lg={3}
                  style={{ backgroundImage: `url(${thumbnail})` }}
                  to={`/bread/${gameId}`}
                >
                  {name}
                </Col>
              )
            })}

          </Row>
        </Container>
      </main>
    </>
  )
}