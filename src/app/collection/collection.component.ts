import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent implements OnInit {

  category = '';

  products: any[] = [];

  allProducts: any = {

   rings: [

{
name:'Diamond Solitaire Ring',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZiM67Ma2Tb6g5pFXlV2KNsGJRiyZI5T6wA&s'
},

{
name:'Classic Gold Ring',
image:'https://cdn.shopify.com/s/files/1/0739/8516/3482/files/LJ-R00419-YG-1_0fbd9206-06f3-4838-84aa-e2e52912dbcb.jpg?v=1781856561&width=1920'
},

{
name:'Rose Gold Ring',
image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRGptXz7tYMHPfvdQ7EPRPXbp4kcFVsYm3AZdinIotUCErIQ8FDns1MKB5VP28bjNg-Oc-21PgbdwcnOX4B-S2CwLr9V-Gz0mtT860P17bDtn3p0-A26KUUnQ'
},

{
name:'Wedding Ring',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WwxvKzGN_5ErelVklwQ8S_JwZRSciWtNOqW33Fiu-9jA49c_J5_18zv6&s=10'
},

{
name:'Designer Ring',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFVLy5P5lwsfrpkradHmE4BLgc91hQsnOIlvEUwgKRyi8BC8FL2X9sBQ&s=10'
},

{
name:'Floral Ring',
image:'https://m.media-amazon.com/images/I/61fDV82AcqL._AC_UY300_.jpg'
},

{
name:'Heart Ring',
image:'https://m.media-amazon.com/images/I/514YEUsXUFL._AC_UY1100_.jpg'
},

{
name:'Traditional Ring',
image:'https://www.ijewels.co.in/cdn/shop/files/FL253_2.jpg?v=1708948715&width=3024'
},

{
name:'Luxury Diamond Ring',
image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXBtRxfg5aM6UhO_Wtse-1mgQAe2qmFcA0VG6tbG5Wdi_DP96wD7feDUFz&s=10'
}

],

    bracelets: [
      {
        name: 'Cuban Link Bracelet',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRNNY4bHMT1vOpQLdn_Po90lLnaCo5OvYQlbd5OglO6MfrwVwUklxDVu9TuVtPdqPSLoNTAj6OSFonbDkGGcNjLT5HQIBytOufywcXyl6-2L3Z_AseJxv_2JQ'
      }
    ],

    bangles: [
      {
        name: 'Luxury Bangles',
        image: 'https://i.pinimg.com/1200x/46/11/35/4611352a335be8ed291bbd7ac3fa2ef5.jpg'
      }
    ]

  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    this.category = this.route.snapshot.paramMap.get('category') || '';

    this.products = this.allProducts[this.category] || [];

  
  }

}
