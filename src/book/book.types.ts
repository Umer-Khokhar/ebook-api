import type { UserType } from "../user/user.types";

export interface BookTypes {
    _id: string;
    title: string;
    description: string;
    genre: string;
    author: UserType;
    coverImage: string;
    pdfFile: string;
}