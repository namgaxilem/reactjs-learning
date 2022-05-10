interface User {
    email?: string | null
    name?: string | null
    tokenType?: string | null
    token?: string | null,
    accessToken?: string | null,
    homeAccountId?: string | null
    expiresOn?: number | null
}

export default User