export default interface IPetitionType {
    created_at: Date; 
    description: string; 
    id: string; 
    scope: number;
    tags: string[];
    title: string;
    userid: string;
}