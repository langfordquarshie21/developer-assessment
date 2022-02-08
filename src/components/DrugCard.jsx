import React, { useState } from "react";
import cartImg from '../assets/cart.svg'
import Modal from 'react-modal';

const customStyles = {
    content: {
        maxWidth: '500px',
        border: 'none',
        boxShadow: 'rgb(50 50 93 / 25%) 0px 50px 100px 20px, #3167eb75 0px 30px 60px 2010px',
        top: '50%',
        borderRadius: '10px',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

const DrugCard = (props) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return <div className="card">
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h1 className="modal-title">{props.name}</h1>
            <br />
            <h3>${props.price}</h3>
            <br />
            <p>{props.description}</p>
        </Modal>

        <div className="card-img">
            <img src={props.image} alt={props.name} />
        </div>
        <div className="card-text">
            <p className="card-name">{props.name}</p>
            <p className="card-price">${props.price}</p>
        </div>
        <div className="add-to-cart-btn" onClick={openModal}>
            <img src={cartImg} alt="cart" />
            Add to cart
        </div>
    </div>
}

export default DrugCard