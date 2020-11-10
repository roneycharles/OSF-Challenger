import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import { FiSearch, FiChevronRight, FiEdit, FiTrash } from 'react-icons/fi';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import { Title, Container, User, AddUser, UserButtons } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import avatarImg from '../../assets/avatar.jpg';

import AddModal from '../../components/AddModal';
import EditModal from '../../components/EditModal';



interface User {
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

interface Users {
  users: User[];
}

interface UsersFormSubmit {
  nickName: string;
}

const Users: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User>({} as User);
  // const [users, setUsers] = useState<User[]>([]);
  const [users, setUsers] = useState<User[]>(() => {
    const storagedUsers = localStorage.getItem('@OSFChallenger:user');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@OSFChallenger:user', JSON.stringify(users));
    console.log(users);
  }, [users]);

  const toggleModal = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [setModalOpen, modalOpen]);

  const toggleEditModal = useCallback(() => {
    setEditModal(!editModalOpen);
  }, [setEditModal, editModalOpen]);


  const handleAddUser = useCallback(
    async (user: User) => {
      try {
        const schema = Yup.object().shape({
          fullName: Yup.string().required(),
          nickName: Yup.string().required(),
        });

        await schema.validate(user, {
          abortEarly: false
        });

        const { fullName, nickName } = user;

        const response = await api.post<User>(
          '/users',
          {
            fullName,
            nickName,
          },
        );

        const newUser = response.data;

        setUsers([newUser, ...users])
      } catch (err) {
        console.log(err);
      }
    }, [setUsers, users]
  );

  const handleRemoveUser = useCallback(
    async (id: number) => {
      console.log(id);
      await api.delete(`users/${id}`);

      const filteredUsers = users.filter(user => user.id !== id);

      setUsers([...filteredUsers]);

    },
    [setUsers, users],
  );

  const handleEditUser = async (user: User): Promise<void> => {
    console.log(user.id);
    const currentUserList = users.map(currentUser => {
      if (currentUser.nickName !== user.nickName) {
        return currentUser;
      }

      return {
        ...user,
        id: user.id,
      };
    });

    setUsers(currentUserList);

    await api.put(
      '/users',
      {
        id: user.id,
        fullName: user.fullName,
        nickName: user.nickName,
      },
    );
  };

  const handleUpdateUser = useCallback(
    (user: User) => {
      setEditingUser(user);
      toggleEditModal();
    },
    [setEditingUser, toggleEditModal],
  );

  const handleSubmit = useCallback(
    async (data: UsersFormSubmit) => {
      const isCloned = users.filter(
        (u) => u.nickName.toLowerCase() === data.nickName.toLowerCase(),
      );

      if (isCloned.length > 0) {
        addToast({
          type: 'error',
          title: 'Usuário já existente',
          description:
            'Não é possivel adicionar na lista usuários já existentes.',
        });
        return;
      }

      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nickName: Yup.string().required('Digite o nome de usuário para pesquisar'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get<User>(`users/${data.nickName}`);

        const userSave = response.data;

        console.log(response.data);

        setUsers([...users, userSave]);

        addToast({
          type: 'success',
          title: 'Busca realizada',
          description: 'O usuário foi encontrado.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Busca sem resultado',
          description: 'O usuário procurado não existe.',
        });
      }
    },
    [addToast, users],
  );

  return (
    <>
      <AddModal
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddUser={handleAddUser}
      />

      <EditModal
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingUser={editingUser}
        handleEditUser={handleEditUser}
      />
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore usuários e repositórios no GitHub.</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Container>
          <Input
            name="nickName"
            icon={FiSearch}
            placeholder="Digite o nome do usuário"
          />
          <Button type="submit">Pesquisar</Button>
        </Container>
        <AddUser onClick={() => toggleModal()}>
            <FiChevronRight size={20}/>
            Adicionar Usuário
        </AddUser>
      </Form>
      <User>
        {users.map((user) => (
          <>
            <Link key={user.nickName} to={`/repositories/${user.nickName}`}>
              <img src={avatarImg} alt={user.nickName} />
              <div>
                <strong>{user.nickName}</strong>
                <p>{user.fullName}</p>
                <div>
                  <p>Stars: {user.countStars}</p>
                  <p>Issues: {user.countIssues}</p>
                  <p>Forks: {user.countForks}</p>
                </div>
              </div>
              {/* <FiChevronRight size={20} /> */}
            </Link>
            <UserButtons>
              <button
                type="button"
                onClick={() => handleUpdateUser(user)}
                data-test-id={`edit-user-${user.id}`}
              >
                <FiEdit size={20} />
              </button>
              <button
                type="button"
                onClick={() => handleRemoveUser(user.id)}
                data-testid={`remove-user-${user.id}`}
              >
                <FiTrash size={20} />
              </button>
            </UserButtons>
          </>
        ))}
      </User>
    </>
  );
};

export default Users;
