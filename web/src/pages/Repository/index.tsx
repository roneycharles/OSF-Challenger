import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';
import { Header, UserInfo, RepositoryList } from './styles';
import logo from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.jpg';

interface ParamProps {
  userParam: string;
}

interface Repository {
  forks: number;
  id: number;
  issues: number;
  name: string;
  stars: number;
}

interface User {
  Repos: Repository[];
  fullName: string;
  nickName: string;
  countStars: number;
  countIssues: number;
  countForks: number;
}

const Repository: React.FunctionComponent = () => {
  const [user, setUser] = useState<User>();
  const { userParam } = useParams<ParamProps>();

  useEffect(() => {
    async function loadRepositories(): Promise<void> {
      const response = await api.get<User>(`/users/${userParam}`);

      setUser(response.data);
    }
    loadRepositories();
  }, [userParam]);

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      {user && (
        <UserInfo>
          <header>
            <div>
              <img src={avatarImg} alt={user.nickName} />
              <strong>{user.fullName}</strong>
            </div>
          </header>
          <ul>
            <li>
              <strong>{user.countStars}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{user.countForks}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{user.countIssues}</strong>
              <span>Issues Abertos</span>
            </li>
          </ul>
        </UserInfo>
      )}

      <RepositoryList>
        {user?.Repos.map((r) => (
          <Link key={r.name} to={`/repositories/${user.nickName}`}>
          <div key={r.id}>
            <strong>{r.name}</strong>
            <div>
              <p>Stars: {r.stars}</p>
              <p>Forks: {r.forks}</p>
              <p>Issues: {r.issues}</p>
            </div>
          </div>
          <FiChevronRight size={20} />
          </Link>
        ))}
      </RepositoryList>
    </>
  );
};

export default Repository;
