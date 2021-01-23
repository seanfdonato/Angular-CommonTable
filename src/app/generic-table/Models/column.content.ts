import { SelectFilter } from "./select.filter";

export class ColumnContent {
    headers: Array<string>;
    rows: Array<any>;
    filterOption: Array<SelectFilter>;
    selectFilter: Array<SelectFilter>
}

interface selectFilter {
    [key: string]: any
}