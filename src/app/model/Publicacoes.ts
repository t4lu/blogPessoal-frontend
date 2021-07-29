import { Assunto } from "./Assunto";
import { Usuario } from "./Usuario";

export class Publicacoes {
        public id: number;
        public titulo: string
        public texto: string
        public date: Date
        public usuario: Usuario
        public assunto: Assunto
}