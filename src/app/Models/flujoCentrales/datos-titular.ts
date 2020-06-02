export interface DatosTitular {
  tipoDocumento: TipoDocumento;
  documento: Documento;
  nombre: Nombre;
  fechaInicio: FechaIncio;
  fechaFin: FechaFin;
}

interface TipoDocumento {
  valor: string;
  estado: boolean;
  campo: boolean;
}

interface Documento {
  valor: string;
  estado: boolean;
  campo: boolean;
}

interface Nombre {
  valor: string;
  mensaje: string;
  color: string;
  estado: boolean;
  campo: boolean;
}

interface FechaIncio {
  valor: string;
  mensaje: string;
  color: string;
  estado: string;
  campo: boolean;
}

interface FechaFin {
  valor: string;
  mensaje: string;
  color: string;
  estado: string;
  campo: boolean;
}
