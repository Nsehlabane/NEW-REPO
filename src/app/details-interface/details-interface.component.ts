import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details-interface',
  templateUrl: './details-interface.component.html',
  styleUrls: ['./details-interface.component.css']
})
export class DetailsInterfaceComponent implements OnInit {


selectedbooking='Computer'
types:string;
typeOfBookings=['Hotel', 'Bus', 'Computer'];

sex :string;
gender=['Male', 'Female', 'Other'];

TripTo :string;
JourneyTo=['Johannesburg', 'Polokwane', 'Nelspriut', 
            'Bhisho', 'Bloemfontein', 'Pietermaritzburg',
          'Mahikeng', 'Kimberly', 'Cape Town'] ;

TripFrom :string;
JourneyFrom=['Johannesburg', 'Polokwane', 'Nelspriut', 
              'Bhisho', 'Bloemfontein', 'Pietermaritzburg',
              'Mahikeng', 'Kimberly', 'Cape Town'] ;



          
  constructor() { }

  ngOnInit() {
  }

}
