import { Component, OnInit } from '@angular/core';

import { BackendService } from '../backend.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyDetails:string;

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.getCompanyDetails();
  }

  getCompanyDetails(): void {
    this.backendService.getCompanyDetails().subscribe(resp => {
      this.companyDetails = resp.data;
    });
  }

}
