import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { ProfileRepo } from "../ProfileRepo/ProfileRepo";

export interface IProfileRepo {
  id: string;
  name: string;
  description: string;
  stargazersCount: number;
  forksCount: number;
  language: string;
  updatedDate: Date;
}

export const ProfileRepoContainer = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/klseung/repos?page=1&per_page=20&sort=updated",
      {
        method: "GET",
        headers: {
          Authorization: `SHA256:G8fFj6sLPV85Uquw1516V0Op1niG07QWX7oKR4Gz6aQ`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRepos(data);
      });
  }, []);

  return (
    <>
      <Container>
        {repos.map((repo: any) => {
          return (
            <ProfileRepo
              id={repo.id}
              description={repo.description}
              key={repo.id}
              name={repo.name}
              stargazersCount={repo.stargazers_count}
              forksCount={repo.forks_count}
              language={repo.language}
              updatedDate={new Date(repo.updated_at)}
            />
          );
        })}
      </Container>
    </>
  );
};
