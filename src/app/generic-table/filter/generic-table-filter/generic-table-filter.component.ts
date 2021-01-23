
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ColumnOptions } from '../../Models/column.option';


@Component({
  selector: 'generic-table-filter',
  templateUrl: './generic-table-filter.component.html',
  styleUrls: ['./generic-table-filter.component.css']
})
export class GenericTableFilterComponent implements OnInit {
  @Input() filters: ColumnOptions

  @Output() selected = new EventEmitter<ColumnOptions>();

  selectedFilter = new FormControl('');
  constructor() {
    this.selectedFilter.valueChanges.subscribe(s => {
      console.log(s);

      let select = s != null ? Array.of(s) : []; // Set to array since colunOption is a Array of strings. When use mult select will not need it.
      let result: ColumnOptions = {
        columnName: this.filters.columnName,
        options: select
      }
      this.selected.emit(result)
    })
  }


  ngOnInit(): void { }
  public clear(): void {
    this.selectedFilter.reset()
  }

}
