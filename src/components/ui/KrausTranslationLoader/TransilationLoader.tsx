'use client';

import { Modal, ModalContent, Spinner } from '@nextui-org/react';
import React from 'react';

type Props = {
  isOpen: boolean;
};

function TransilationLoader(props: Props) {
  const { isOpen } = props;

  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      backdrop="blur"
      isOpen={isOpen}
      hideCloseButton={true}
    >
      <ModalContent
        className="max-lg:m-auto"
        style={{
          backgroundColor: 'transparent',
          borderColor: 'red',
          boxShadow: 'none'
        }}
      >
        <Spinner color="danger" label="Loading..." labelColor="foreground" />
      </ModalContent>
    </Modal>
  );
}
export default TransilationLoader;
