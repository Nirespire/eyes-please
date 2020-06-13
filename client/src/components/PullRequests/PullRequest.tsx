import React from 'react';
import { Card, Avatar, Tag } from 'antd'
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons';
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
}


const PullRequest = ({ title, owner, repo, number, avatarUrl, user, userUrl, prUrl }: PullRequestProps) => {

  return (
    <Card hoverable bordered={false}>
      <Meta
        avatar={<Avatar src={avatarUrl} />}
        title={user + ' ' + owner + '/' + repo + ' ' + '#' + number}
        description={user}
      />
      {title}
      <Tag color="default">default</Tag>
    </Card>
  )
}

export default PullRequest