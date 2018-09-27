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
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default Movie;
