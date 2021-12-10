import { Content } from "./content";

export class File {
    filename!: String;
    isDirectory!: boolean;
    path!: String;
    size!: number;
    createdDate!: Date;
    type!: String;
    content!: Content;
}
