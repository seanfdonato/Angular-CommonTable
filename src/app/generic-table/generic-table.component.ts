import { Component, Input, OnInit } from '@angular/core';
import { GenericTableFilterService } from './filter/generic-table-filter.service';
import { ColumnOptions } from './Models/column.option';
import { TableContent } from './Models/table.content';


@Component({
  selector: 'sd-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css']
})
export class GenericTableComponent implements OnInit {
  t: Array<any>
  public tableContent = new TableContent();
  @Input() set columns(data: Array<any>) {
    console.log(data);
    this.tableContent = this.getTableContent(data);
  }

  _object = Object;
  constructor(private filterService: GenericTableFilterService) { }

  ngOnInit(): void {
  }

  public dataShow(): Array<any> {
    return this.tableContent.filteredData;
  }

  private getHeaders(data: object): Array<string> {
    return Object.keys(data);
  }

  private getTableContent(data: Array<any>): TableContent {
    let headers = this.getHeaders(data[0]);
    return {
      data: data,
      filteredData: data,
      headers: headers,
      filterOption: this.filterService.getAllFilterOption(data, headers),
      selectFilter: new Array<ColumnOptions>(),
      stringSearch: ''

    } as TableContent
  }

  /**
   * Filter with search and column filters
   * @param filter 
   */
  public filter(filter: ColumnOptions) {
    console.log(filter);

    this.tableContent.selectFilter = this.filterService.updateSelectFilter(this.tableContent.selectFilter, filter)
    this.tableContent = this.filterService.filterTable(this.tableContent);
  }
  /**
   * Get filter options by column
   * @param columnName column name
   * @param filterOption columns filter options
   */
  public getFilterOption(columnName: string, filterOption: Array<ColumnOptions>): ColumnOptions {
    return this.filterService.getFilterOption(columnName, filterOption)
  }
  event(event: any) {
    console.log(event.target.value);
    this.tableContent.stringSearch = event.target.value;
    this.tableContent = this.filterService.filterTable(this.tableContent);

  }
}
