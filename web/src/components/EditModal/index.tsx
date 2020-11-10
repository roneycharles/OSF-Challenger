import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import Button from '../Button';

interface IEditUserData {
  id: number;
  fullName: string;
  nickName: string;
  repos: {
    id: number;
    name: string;
    stars: number;
    issues: number;
    forks: number;
  };
  countStars: number;
  countIssues: number;
  countForks: number;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingUser: IEditUserData;
  handleEditUser: any;
}

const ModalEditUser: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingUser,
  handleEditUser,
}) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: IEditUserData) => {
      handleEditUser({ ...data, id: editingUser.id });
      setIsOpen();
    },
    [handleEditUser, setIsOpen, editingUser.id],
  );

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingUser}>
        <h1>Editar Usuário</h1>
        <Input name="fullName" placeholder="Nome Completo" />

        <Input
          name="nickName"
          placeholder="Nome de Usuário"
        />

        <Button type="submit" data-testid="edit-user-button">
          Editar
        </Button>
      </Form>
    </Modal>
  );
};

export default ModalEditUser;
