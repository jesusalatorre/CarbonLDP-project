import React, { Component } from 'react';
import { Header, MovieList, SearchBar, Movie } from './presentational';
import { Loading } from './presentational/elements';
import { getMovies } from '../microserver/microserver';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      loading: true,
      modalIsOpen: false,
      movieSelected: {},
    }
    this.interactModal = this.interactModal.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }

  componentDidMount() {
    // Fetch movies from Carbon LDP
    getMovies().then((movies) => {
      this.setState({ loading: false });
      this.setState({ movieList: movies });
    }).catch((error) => {
      console.log("No hay peliculas");
    });
  }

  interactModal() {
    let modalIsOpen = this.state.modalIsOpen;
    this.setState({modalIsOpen: !modalIsOpen});
  }

  selectMovie(movie) {
    this.setState({movieSelected: movie});
    this.interactModal();
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <Content movieList={this.state.movieList} loading={this.state.loading} selectMovie={this.selectMovie} />
        <Movie modalIsOpen={this.state.modalIsOpen} interactModal={this.interactModal} movie={this.state.movieSelected} />
      </div>
    );
  }
}

const Content = ({ movieList, loading, selectMovie }) => {
  if (loading) {
    return <Loading />
  } else {
    return <MovieList movieList={movieList} selectMovie={selectMovie} />
  }
}

export default MainPage;
