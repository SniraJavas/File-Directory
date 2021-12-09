import { Content } from "./content";

class File {
    filename!: String;
    isDirectory!: boolean;
    path!: String;
    size!: String;
    createdDate!: Date;
    type!: String;
    content!: Content;
}

export default File;