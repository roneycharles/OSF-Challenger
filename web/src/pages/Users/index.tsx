import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';

import { FiSearch, FiChevronRight } from 'react-icons/fi';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';
import logo from '../../assets/logo.svg';
import { Title, Container, User } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';
import avatarImg from '../../assets/avatar.jpg';

interface Users {
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
  countStar: number;
  countIssues: number;
  countForks: number;
}

interface UsersFormSubmit {
  nickName: string;
}

// interface Users {
//   login: string;
//   avatar_url: string;
//   name: string;
// }

// interface Users {
//   users: User[];
// }

const Users: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const [user, setUser] = useState<Users[]>(() => {
    const storagedUsers = localStorage.getItem('@OSFChallenger:user');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@OSFChallenger:user', JSON.stringify(user));
  }, [user]);

  // useEffect(() => {
  //   async function getUsers(): Promise<void> {
  //     const response = await api.get<Users>(`/users/${user}`);
  //     setUser(response.data.users);
  //   }
  //   getUsers();
  // }, [user]);

  const handleSubmit = useCallback(
    async (data: UsersFormSubmit) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          nickName: Yup.string().required('Digite o username para pesquisar'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.get<Users>(`users/${data.nickName}`);

        const users = response.data;

        setUser([...user, users]);
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
    [addToast, user],
  );

  return (
    <>
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
      </Form>

      <User>
        {user.map((users) => (
          <Link key={users.nickName} to={`/users/${users.nickName}`}>
            <img src={avatarImg} alt={users.nickName} />
            <div>
              <strong>{users.nickName}</strong>
              <p>{users.fullName}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </User>
    </>
  );
};

export default Users;
