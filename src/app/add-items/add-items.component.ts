import { Component, OnInit } from '@angular/core';

import { Item } from '../models/item';
import { City } from '../models/city';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {

  title: string = "Add Items";

  items: Item[] = [];  
  cities: City[] = [];
  isItemsSubmitted:boolean = false;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void { 
    this.getCities();    
  }

  getCities(): void {
    this.backendService.getCities().subscribe(resp => {
      this.cities = resp.data;
      this.initializeItemList();
    });
  }

  addRow(): void {
    this.initializeItemList();
  }

  submitDetails(): void {
    localStorage.setItem("itemList", JSON.stringify(this.items));
    this.isItemsSubmitted = true;
    this.items = [];
    this.initializeItemList();
  }

  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }

  initializeItemList(): void {
    let item:Item = {
      firstName: '',
      lastName: '',
      contactNo: 0,
      city:this.cities[0]
    }
    this.items.push(item);
  }

}
