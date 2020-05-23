import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import './tailwind.generated.css';
import PullRequest from './components/PullRequest'

interface IUserDetails {
  avatar_url: string,
  html_url: string,
}

interface IPullRequestDetails {
  title: string,
  number: number,
  state: string,
  created_at: Date,
  updated_at: Date,
  draft: boolean,
  html_url: string,
  user: IUserDetails
}

type IApiResponse = {
  owner: string,
  repo: string,
  pullRequests: IPullRequestDetails[]
}

type ApiResponseArray = IApiResponse[]

function App() {

  const [apiResponse, setApiResponse] = useState<ApiResponseArray>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('/prs',);
      console.log(result.data)
      setApiResponse(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App container mx-auto">
        {apiResponse && apiResponse.map(repo => {
          console.log("repo", repo)
          return repo.pullRequests.map( pr => {
            console.log("pr", pr)
            return <PullRequest title={pr.title} number={pr.number} owner={repo.owner} repo={repo.repo} avatarUrl={pr.user.avatar_url} userUrl={pr.user.html_url} prUrl={pr.html_url}/>
          })
        })}
    </div>
  );
}

export default App;
