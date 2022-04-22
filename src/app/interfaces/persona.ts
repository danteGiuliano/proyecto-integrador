export interface Persona {
    id:           number;
    nombre:       string;
    apellido:     string;
    especialidad: string;
    acerca_de:    string;
    token?:string
}
export interface Login{
    usuarioOEmail:string
    password:string
}