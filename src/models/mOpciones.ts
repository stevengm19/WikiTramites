export class mMenu {
    Nombre: string;
    Colapsa: boolean;
    Componente: boolean;
    Opciones: Array<mPaginas> = [];
}

class mPaginas {
    Titulo: string;
    Page: any;
}