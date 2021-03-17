import { Skill } from './skill';
import { Department } from './department';


export interface employee{
    id :number;
    name : string;
    salary : number;
    permanent : boolean;
    dept:Department;
    skill:Skill[];
}