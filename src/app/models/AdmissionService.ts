import { Colleges } from "./Colleges";
import { Programs } from "./Programs";

export class AdmissionService {
    public id: string;
    public img: string;
    public servicename: string;
    public description: string;
    public universityTitle: string;
    public universityDesc: string;
    public allcollege: string;
    public vaishali: string;
    public samastipur: string;
    public programs: Programs[];
    public colleges: Colleges;
}