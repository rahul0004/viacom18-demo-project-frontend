import { Component, OnInit } from '@angular/core';

import { Item } from '../models/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  title: string = "List Items";

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList(): void {
    this.items = JSON.parse(localStorage.getItem("itemList"));
  } 

}
