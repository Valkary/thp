type SHEETS = "catCLIENTES" | "catCDC" | "catESTACIONES" | "catFORM" | "catFORMver" | "catGRUPOS" | "catINCID" | "catMANT" | "catMANTsis" | "catMANTtipo" | "catMAQ"
  | "catMAQtipo" | "catMENU" | "catMENUini" | "catDB" | "catMOLDES" | "catMP" | "catMPclase" | "catPROV" | "catPT" | "catPUESTO" | "catTC" | "catTRAB" | "catTRABniv" | "catTRABpuesto"
  | "catTRABsueldo";

type VARCHAR = `VARCHAR(${number})`;
type NUMERIC = `NUMERIC(${number})`;

type FIELD_TYPE = VARCHAR | NUMERIC

type SHEETS_TABLE_DEFINITION = Record<SHEETS, {
  table_csv_url: string,
  table_structure: Record<string, FIELD_TYPE>
}>;

export const sheets_table_definition: SHEETS_TABLE_DEFINITION = {
  catCLIENTES: {
    table_csv_url: "",
    table_structure: {
      idCliente: "VARCHAR(8)",
      Nombre: "VARCHAR(255)",
      Contacto: "VARCHAR(255)",
      DomNumExt: "NUMERIC(10)",
      DomColonia: "VARCHAR(255)",
      DomCalle: "VARCHAR(255)",
      DomCp: "NUMERIC(5)"
    },
  },
  catCDC: {
    table_csv_url: "",
    table_structure: undefined
  },
  catESTACIONES: {
    table_csv_url: "",
    table_structure: undefined
  },
  catFORM: {
    table_csv_url: "",
    table_structure: undefined
  },
  catFORMver: {
    table_csv_url: "",
    table_structure: undefined
  },
  catGRUPOS: {
    table_csv_url: "",
    table_structure: undefined
  },
  catINCID: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMANT: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMANTsis: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMANTtipo: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMAQ: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMAQtipo: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMENU: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMENUini: {
    table_csv_url: "",
    table_structure: undefined
  },
  catDB: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMOLDES: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMP: {
    table_csv_url: "",
    table_structure: undefined
  },
  catMPclase: {
    table_csv_url: "",
    table_structure: undefined
  },
  catPROV: {
    table_csv_url: "",
    table_structure: undefined
  },
  catPT: {
    table_csv_url: "",
    table_structure: undefined
  },
  catPUESTO: {
    table_csv_url: "",
    table_structure: undefined
  },
  catTC: {
    table_csv_url: "",
    table_structure: undefined
  },
  catTRAB: {
    table_csv_url: "",
    table_structure: undefined
  },
  catTRABniv: {
    table_csv_url: "",
    table_structure: undefined
  },
  catTRABpuesto: {
    table_csv_url: "",
    table_structure: undefined
  },
  catTRABsueldo: {
    table_csv_url: "",
    table_structure: undefined
  }
};
