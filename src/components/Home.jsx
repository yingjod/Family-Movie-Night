import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom'

//! Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Home() {
  const shows = useLoaderData()

  //! Functions

// function familtyFilter(){
//   shows.filter(show => {
//         return show.genres.includes("Family")
//   }
//   )
// }
// console.log(familtyFilter())


// function randomPick(){
//   return Math.floor(Math.random())
// }


  //!JSX
  return (
    <section className="centred">
      {/* <Link to="/shows" className='btn btn-pink'>View All Shows</Link> */}

      <Container fluid>
          <Row className="shows-list">
            {shows
              .filter(show =>{
                return show.genres.includes("Family")
              }
              )
              .map(show => {
                const { id, name, image: { medium } } = show
                console.log(show)


                return (
                  <Col
                    as={Link}
                    key={5}
                    style={{ backgroundImage: `url("${medium}")` }}
                    to={`/shows/${id}`}
                  >
                    {/* <div style={{ backgroundImage: `url("${medium}")` }}></div> */}
                    <p>{name}</p>
                  </Col>
                )
              }
              
              )
              }
          </Row>
        </Container>


      
    </section>
  )
}



