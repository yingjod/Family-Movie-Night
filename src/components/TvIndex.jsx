import { useLoaderData } from "react-router-dom"
import { Link, Form } from 'react-router-dom'
import { useState } from 'react'



//! Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown'

export default function TvIndex() {
  const shows = useLoaderData()
  // console.log(shows)


  const genresAll = []
  const genreSets = [...new Set(shows.map(show => show.genres))]
  genreSets.forEach(listOfGenre => {
    listOfGenre.forEach(genre => {
      genresAll.push(genre)
      genresAll.unshift('All')
    })
  })
  const genreList = genresAll.filter((value, index) => genresAll.indexOf(value) === index)
  // console.log(genreList)

  const [genrePick, setGenrePick] = useState('All')
  // console.log(typeof genrePick)

  //! Functions
  function handleSubmit(e) {
    e.preventDefault()
  }

  //! JSX
  return (
    <>
      <section className="container">
          <form onSubmit={handleSubmit}>
            <select
              className="genres-list"
              onChange={(e) => setGenrePick(e.target.value)}
              value={genrePick}
            >
              {genreList
                .map((genreChoice, i) => {  
                  return <option key={i} value={genreChoice}>{genreChoice}</option>
                })
              }
            </select>
          </form>
        </section>


      <Form onSubmit={handleSubmit}>
        <Dropdown
          onChange={(e) => setGenrePick(e.target.value)}
          value={genrePick}
        >
          <Dropdown.Menu
          >
            {genreList
              .map((genreChoice, i) => {
                return <Dropdown.Item key={i} value={genreChoice}>{genreChoice}</Dropdown.Item>
              })
            }
          </Dropdown.Menu>

          <Dropdown.Toggle variant="success" id="dropdown-basic"
          >
            {genrePick}
          </Dropdown.Toggle>

        </Dropdown>
      </Form>

      <main>
        {/* <h1 className="bold display-3 mb-4">Shows List</h1> */}
        <Container fluid>
          <Row className="shows-list">
            {shows
              .filter(show => {
                // console.log(genrePick)
                if (genrePick === 'All'){
                  return show.genres
                } else{
                  return (
                    show.genres.includes(genrePick)
                  )
                }
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
                    md={4}
                    lg={2}
                    xl={1}
                    style={{ backgroundImage: `url("${medium}")` }}
                    to={`/shows/${id}`}
                  >
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