import React, { useState } from 'react';
import Modal from 'react-modal';
import Login from './Login.js'
import Signup from './Signup.js';
import SingnupEmail from './SingnupEmail.js';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '24rem',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const AuthModal = ({ modalIsOpen, closeModal }) => {
  const [type, setType] = useState(1);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <button
        className="absolute top-0 right-0 mt-4 mr-4 text-gray-600 hover:text-gray-800 cursor-pointer"
        onClick={closeModal}
      >
        &times;
      </button>
      {type === 1 &&
        <Login
          setType={setType}
        />
      }
      {type === 2 &&
        <Signup
          setType={setType}
        />
      }
      {type === 3 &&
        <SingnupEmail
          setType={setType}
        />
      }
    </Modal>
  );
};

export default AuthModal;
