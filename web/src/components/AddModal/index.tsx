import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

interface ICreateUserData {
  fullName: string;
  nickName: string;
  quantity: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddUser: any;
}

const ModalAddUser: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddUser,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateUserData) => {
      handleAddUser(data);
      setIsOpen();
    },
    [handleAddUser, setIsOpen],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Adicionar Usuário</h1>
        <Input name="fullName" placeholder="Nome completo" />

        <Input
          name="nickName"
          placeholder="Nome de usuário"
        />

        <Button type="submit" data-testid="add-user-button">
          Adicionar
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalAddUser;
