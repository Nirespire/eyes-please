import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'antd'

import PullRequest from './PullRequest';

interface IUserDetails {
    avatar_url: string,
    html_url: string,
    login: string,
}

interface IPullRequestDetails {
    title: string,
    number: number,
    state: string,
    created_at: Date,
    updated_at: Date,
    draft: boolean,
    html_url: string,
    user: IUserDetails,
}

type IApiResponse = {
    owner: string,
    repo: string,
    pullRequests: IPullRequestDetails[]
}

type ApiResponseArray = IApiResponse[]

function PullRequestList() {

    const [apiResponse, setApiResponse] = useState<ApiResponseArray>([]);

    const [loading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/prs',);
            console.log(result.data)
            setApiResponse(result.data);
            setIsLoading(false)
        };
        fetchData();
    }, []);

    const renderLoadingPullRequests = (numLoadingCards = 4) => {
        return Array(numLoadingCards).fill(1).map(i => {
            return <Card bordered={false} loading={true}></Card>
        })
    }

    const renderPullRequestsFromApiResponse = (apiResponse: IApiResponse[]) => {
        return apiResponse && apiResponse.map(repo => {
            return repo.pullRequests.map(pr => {
                return <PullRequest title={pr.title} number={pr.number} owner={repo.owner} repo={repo.repo} avatarUrl={pr.user.avatar_url} user={pr.user.login} userUrl={pr.user.html_url} prUrl={pr.html_url} />
            })
        })
    }

    return (
        <Row>
            <Col span={16} offset={4}>
                {loading ?
                    renderLoadingPullRequests() :
                    renderPullRequestsFromApiResponse(apiResponse)}
            </Col>
        </Row>
    )
}

export default PullRequestList;