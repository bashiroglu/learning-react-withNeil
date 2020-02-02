import React from 'react';
import TestModel from './TestModel';
import { connect } from 'react-redux';

const modalLookup = {
  TestModel
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
  currentModel: state.modals
});

export default connect(mapStateToProps)(ModalManager);
