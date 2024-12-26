
export type User = {
    id: number,
    username: string,
    score: string,
    email: string,
    createdAt: Date,
    updatedAt: Date
}

export type UserData = {
    username: string, 
    score: string,
    email: string | null,
    password: string | null
}