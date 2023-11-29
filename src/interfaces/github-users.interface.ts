import {User} from "./user.interface";

export interface GithubUsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}
