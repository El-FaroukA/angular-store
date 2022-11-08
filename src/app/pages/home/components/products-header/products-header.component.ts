import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: `./products-header.component.html`,
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemShowCount = 12;

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(sort: string) {
    this.sort = sort;
  }

  onItemsUpdated(count: number) {
    this.itemShowCount = count;
  }

  onColumnsUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum);
  }
}
