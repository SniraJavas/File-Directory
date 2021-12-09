import { Content } from "./content";

export class File {
    filename!: String;
    isDirectory!: boolean;
    path!: String;
    size!: String;
    createdDate!: Date;
    type!: String;
    content!: Content;
}
