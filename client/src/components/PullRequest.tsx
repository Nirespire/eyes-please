import React from 'react';
import styled from 'styled-components'

type PullRequestProps = {
  title: string,
  owner: string,
  repo: string,
  number: number,
  avatarUrl: string,
  userUrl: string,
  prUrl: string,
}


const PullRequest = ({title, owner, repo, number, avatarUrl, userUrl, prUrl}: PullRequestProps) => {
  return (
    <div className="flex border-4 border-gray-600 min-w-full content-center">
      <div className="flex">
        <a href={userUrl} target="_blank"><img className="rounded-full mr-4 h-10 w-10 object-left" src={avatarUrl} alt="user"/></a>
      </div>
      <div className="mt-4 md:mt-0 md:ml-6">
        <span><a href="#" className="uppercase tracking-wide text-sm text-indigo-600 font-bold">{owner}/{repo}</a></span>
        <a href={prUrl} target="_blank" className="block mt-1 text-lg leading-tight font-semibold text-white-900 hover:underline">#{number} {title}</a>
      </div>      
    </div>
  )
}

export default PullRequest