import { ColumnOptions } from "./column.option";

export class TableContent {
    headers = new Array<string>();
    data = new Array<any>();
    filteredData = new Array<any>();
    filterOption = new Array<ColumnOptions>();
    stringSearch = '';
    selectFilter = new Array<ColumnOptions>();
}
