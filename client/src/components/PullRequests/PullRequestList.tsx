import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'antd'

import PullRequest from './PullRequest';
import { IApiResponse, ApiResponseArray } from './../../types/types'

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
        return Array(numLoadingCards).fill(1).map((i,j) => {
            return <Card key={j} bordered={false} loading={true}></Card>
        })
    }

    const renderPullRequestsFromApiResponse = (apiResponse: IApiResponse[]) => {
        return apiResponse && apiResponse.map(repo => {
            return repo.pullRequests.map((pr, i) => {
                return <PullRequest key={i} title={pr.title} number={pr.number} owner={repo.owner} repo={repo.repo} avatarUrl={pr.user.avatar_url} user={pr.user.login} userUrl={pr.user.html_url} prUrl={pr.html_url} mergeable={pr.mergeable} reviews={pr.reviews} />
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