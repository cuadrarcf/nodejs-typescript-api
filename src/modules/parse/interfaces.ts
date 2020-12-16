export interface ParseBodyRequest {
    data: string
}

export interface ParseResponse {
    statusCode: number,
    data: {
        firstName: string,
        lastName: string,
        clientId: string,
    }
}



