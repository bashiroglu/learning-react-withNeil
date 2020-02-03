import React from 'react';
import TestModal from './TestModal';
import { connect } from 'react-redux';

const modalLookup = {
  TestModal
};

function ModalManager({ currentModal }) {
  let renderModal;
  if (currentModal) {
    const { modalType, ModalProps } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderModal = <ModalComponent {...ModalProps} />;
  }
  return <span>{renderModal}</span>;
}
const mapStateToProps = state => ({
  currentModal: state.modals
});

export default connect(mapStateToProps)(ModalManager);
