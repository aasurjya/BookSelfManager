

export interface BasicsBooks {
    id: number,
}

export interface Books extends BasicsBooks{
    title: string,
    author: string,
    publishedYear: number,

}