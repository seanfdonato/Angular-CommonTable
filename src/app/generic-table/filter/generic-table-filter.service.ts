import { Injectable } from '@angular/core';
import { ColumnOptions } from '../Models/column.option';
import { TableContent } from '../Models/table.content';

@Injectable({
  providedIn: 'root'
})
export class GenericTableFilterService {

  constructor() { }
  /**
   * 
   * @param columnName Get filter optionn by column
   * @param filterOption 
   */
  public getFilterOption(columnName: string, filterOption: Array<ColumnOptions>): ColumnOptions {
    return filterOption.filter(filter => filter.columnName == columnName)[0];
  }
  /**
   * Get all posible filter option
   * @param data 
   */
  public getAllFilterOption(data: Array<any>, headers: Array<string>): Array<ColumnOptions> {

    let filterOption = new Array<ColumnOptions>();
    headers.forEach(header => {
      let filter: ColumnOptions = {
        columnName: header,
        options: this.distinct(data.map(row => String(row[header])))
      }
      filterOption.push(filter)
    });

    return filterOption;
  }
  /**
   * Distinct dara
   * @param data 
   */
  private distinct(data: Array<string>) {
    return [...new Set(data)]
  }
  /**
   * filter and search data
   * @param tableContent 
   */
  public filterTable(tableContent: TableContent): TableContent {
    let filtered: Array<any>

    filtered = this.search(tableContent.data, tableContent.stringSearch);

    tableContent.filteredData = this.columnFilter(filtered, tableContent.selectFilter);

    console.log(tableContent.filteredData);

    tableContent.filterOption = this.getAllFilterOption(tableContent.filteredData, tableContent.headers);

    return tableContent;
  }
  /**
   * Search data by string text
   * @param data 
   * @param search 
   */
  private search(data: Array<any>, search: string): Array<any> {
    let result = data.filter(row => { return JSON.stringify(row).toUpperCase().includes(search.toUpperCase()) })

    return result;
  }
  /**
   * filter data by filter
   * @param data 
   * @param filterOption 
   */
  private columnFilter(data: Array<any>, filterOption: Array<ColumnOptions>) {
    return data.filter(row => {
      return this.isFiltered(row, filterOption);
    })
  }
  /**
   * Checks if each row match with filters
   * @param row 
   * @param filters 
   */
  private isFiltered(row: any, filters: Array<ColumnOptions>): boolean {
    let result = true;
    for (let index = 0; index < filters.length; index++) {
      result = filters[index].options.includes(String(row[filters[index].columnName]))
      if (!result)
        break;
    }
    return result;
  }
  /**
   * Update selected filter
   * @param filters 
   * @param updateFilter 
   */
  public updateSelectFilter(filters: Array<ColumnOptions>, updateFilter: ColumnOptions): Array<ColumnOptions> {
    var index = filters.findIndex(x => x.columnName == updateFilter.columnName)

    console.log(index);

    if (index == -1) {
      filters.push(updateFilter)
    } else {
      if (updateFilter.options.length == 0) {
        console.log('up');

        filters.splice(index, 1);
      }
      else {
        filters[index] = updateFilter
        console.log('remove');

      }
    }
    return filters;
  }
}
