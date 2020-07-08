export interface IUserDetails {
    avatar_url: string,
    html_url: string,
    login: string,
}

export interface IPullRequestReview {
    id: number,
    state: string,
    user: string,
    submittedAt: string
}

export interface IPullRequestDetails {
    title: string,
    number: number,
    state: string,
    created_at: Date,
    updated_at: Date,
    draft: boolean,
    html_url: string,
    user: IUserDetails,
    mergeable: string,
    reviews: IPullRequestReview[]
}

export type IApiResponse = {
    owner: string,
    repo: string,
    pullRequests: IPullRequestDetails[]
}

export type ApiResponseArray = IApiResponse[]


export interface RepoConfig {
    owner: string,
    repo: string
}

export interface Preferences {
    groupByRepo?: boolean,
    hoursToStale?: number,
    approvalsToMerge?: number,
    showRequestApprovals?: boolean,
    ignoreWeekends?: boolean
}

export interface Config {
    apiBaseUrl?: string,
    preferences?: Preferences
    repos?: RepoConfig[],
    repoRegexes?: string[]
}