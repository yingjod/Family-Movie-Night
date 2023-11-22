import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom'


//! Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function TvIndex() {
  const shows = useLoaderData()
  // console.log(shows)


  //! Functions
  // const genresList = [...new Set(shows
  //   .map(item => item.genres)
  //   )]
  //   genresList.filter(show =>{
  //     return show.includes("Family")
  //   }
  //   )
  //   const familyGenre = genresList.filter(show =>{
  //     return show.includes("Family")
  //   }
  //   )

  //   console.log(familyGenre)


  //! WHY THIS DOES NOT WORK??????????????????????????????????????????????
  // function familyFilter(){
  //   shows.filter(show => {
  //         return show.genres.includes("Family")
  //   }
  //   )
  // }

  //! JSX
  return (
    <>
      <main>
        <h1 className="text-center bold display-3 mb-4">Shows List</h1>
        <Container fluid>
          <Row className="shows-list">
            {shows
              .filter(show =>{
                return show.genres.includes("Family")
              }
              )
              .map(show => {
                const { id, name, image: { medium } } = show
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