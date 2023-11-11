export default interface IPetitionType {
    created_at: Date; 
    description: string; 
    id: string; 
    scope: number;
    tags: string[];
    uservotes: string[];
    title: string;
    userid: string;
    locked: boolean;
}