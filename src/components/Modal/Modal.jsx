import { createPortal } from 'react-dom';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, StyledModal, StyledImg } from './ModalStyled';

const modalRoot = document.querySelector('#modal');

class Modal extends Component {
  static propTypes = {
    modalData: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
    onModalClose: PropTypes.func.isRequired,
  };

  handleCloseModal = e => {
    if (e.target === e.currentTarget || e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleCloseModal);
  }

  render() {
    const { largeImageURL, tags } = this.props.modalData;
    return createPortal(
      <Overlay onClick={this.handleCloseModal}>
        <StyledModal>
          <StyledImg src={largeImageURL} alt={tags}></StyledImg>
        </StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
