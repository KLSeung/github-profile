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

export const ProfileRepoContainer = ({ userRepos }: any) => {
  return (
    <>
      <Container>
        {userRepos &&
          userRepos.map((repo: any) => {
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
