import { useLoaderData } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState } from 'react'



//! Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Dropdown from 'react-bootstrap/Dropdown'

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
  const [search, setSearch] = useState('')

  //! Functions
  function handleSubmit(e) {
    e.preventDefault()
  }

  //! JSX
  return (
    <>
      <section className="searchContainer">
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
          <input
            placeholder="Search..."
            className="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </form>
      </section>


      {/* <Form onSubmit={handleSubmit}>
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
      </Form> */}

      <main>
        {/* <h1 className="bold display-3 mb-4">Shows List</h1> */}
        <Container fluid>
          <Row className="shows-list">
            {shows
              .filter(show => {
                const pattern = new RegExp(search, 'i')
                if (genrePick === 'All') {
                  return pattern.test(show.name)
                } else if (show.genres.includes(genrePick)) {
                  return pattern.test(show.name)
                }
              }
              )
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(show => {
                const { id, name, image: { medium } } = show
                return (
                  <Col
                    as={Link}
                    key={id}
                    xs={4}
                    s={3}
                    md={3}
                    lg={2}
                    xl={2}
                    // style={ {backgroundColor: "black"}}
                    to={`/shows/${id}`}
                  >
                    {/* <Container>
                      <Row sm={9} className="movietittle" style={{ backgroundImage: `url("${medium}")` }}></Row>
                      <Row sm={3} className="movietittle">{name}</Row>
                    </Container> */}
                    <div className="rails">
                      <img className="thumbnail" src={medium} to={`/shows/${id}`} />
                      <p className="movietittle">{name}</p>
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