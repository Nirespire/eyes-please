import React from 'react';
import { Card, Avatar, Tag } from 'antd'
import { IPullRequestReview } from '../../types/types'
import { green, grey } from '@ant-design/colors'
// import {
//   CheckCircleOutlined,
//   SyncOutlined,
//   CloseCircleOutlined,
//   ExclamationCircleOutlined,
//   ClockCircleOutlined,
//   MinusCircleOutlined,
// } from '@ant-design/icons';
const { Meta } = Card;


type PullRequestProps = {
  title: string,
  owner: string,
  repo: string,
  number: number,
  avatarUrl: string,
  user: string,
  userUrl: string,
  prUrl: string,
  mergeable: string,
  reviews: IPullRequestReview[]
}


const PullRequest = ({ title, owner, repo, number, avatarUrl, user, mergeable, userUrl, prUrl, reviews }: PullRequestProps) => {

  const count = {
    approvals: 0,
    comments: 0,
    changes: 0
  }

  reviews.forEach(review => {
    switch (review.state) {
      case "APPROVED":
        count.approvals++
        break
      case "CHANGES_REQUESTED":
        count.changes++
        break
      case "COMMENTED":
        count.comments++
        break
    }
  })



  const color = mergeable ? green : grey;

  return (
    <Card hoverable bordered={false}
          extra={`${owner}/${repo} #${number}`}
          style={{ 
            backgroundColor: color[2],
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
          headStyle={{backgroundColor: color[3]}}
          bodyStyle={{backgroundColor: color[2]}}
          >
            
      <Meta
        avatar={<Avatar src={avatarUrl} />}
        title={title}
        description={user}
      />
      <br/>
      <Tag color="success">{count.approvals}</Tag>
      <Tag color="error">{count.changes}</Tag>
      <Tag color="default">{count.comments}</Tag>
    </Card>
  )
}

export default PullRequest