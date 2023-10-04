import { RowID, RowElement } from './interface';
import * as CRUD from './crud'; 

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva'
};

const newRowId = CRUD.insertRow(row); 

const updatedRow: RowElement = {
  ...row,
  age: 23
};

CRUD.updateRow(newRowId, updatedRow);

CRUD.deleteRow(newRowId);