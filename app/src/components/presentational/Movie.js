import React, { Component } from 'react'
import Modal from 'react-modal'
import "./../../styles/movie.css"

Modal.setAppElement('#root')

class Movie extends Component {
    render() {
        return(
            <Modal
                isOpen={this.props.modalIsOpen}>
                <button onClick={this.props.interactModal}>Cerrar</button>
                <ModalContent movie={this.props.movie} />
            </Modal>
        );
    }
}

const ModalContent = ({ movie }) => {
    if (movie) {
        return (
            <div className="movie-container">
                <h1>{movie.name}</h1>
                <img src={movie.image} className="image" />
                <p>{movie.description}</p>

                <br />
                <br />

                <h3>Evalúa esta película</h3>

                <br />

                <button>Vi esta película</button>

                <p>¿Te gusto esta película?</p>
                <button>Sí</button>
                <button>No</button>

                <p>¿A qué hora viste esta película?</p>
                <button>Mañana</button>
                <button>Tarde</button>
                <button>Noche</button>

                <p>¿Con quien viste la película?</p>
                <button>Solo</button>
                <button>Hijos</button>
                <button>Hermanos</button>
                <button>Pareja</button>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default Movie;
