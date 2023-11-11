export default interface ISolutionType {
    id: string,
    title: string,
    description: string,
    created_at: Date,
    petitionid: string,
    userid: string,
    uservotes: string[]
}