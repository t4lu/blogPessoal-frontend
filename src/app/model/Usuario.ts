import { Publicacoes } from "./Publicacoes";

export class Usuario {
    public id: number;
    public nome: string
    public usuario: string
    public email: string
    public senha: string
    public foto: string
    public tipo: string
    public publicacoes: Publicacoes [] //array
    
}