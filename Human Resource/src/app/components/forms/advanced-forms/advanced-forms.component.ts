import { Component, OnInit } from '@angular/core';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Moment } from 'moment'
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { DualListComponent } from 'angular-dual-listbox';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-advanced-forms',
  templateUrl: './advanced-forms.component.html',
  styleUrls: ['./advanced-forms.component.scss']
})
export class AdvancedFormsComponent implements OnInit {

  Source:any = []
  destination = []

   dropdownList:any[] = [];
  dropdownList2:any[] = [];

  singleItem = [];
  SingleSettings = {};

  multipleItems = [];
  multipleSelectItems = [];
  multipleSettings = {};

  disableItems = [];
  disableSettings= {};


  itemList:any[] = [];
  itemSelect = [];
  itemSettings = {};

  model!: NgbDateStruct;

  selected!: {startDate: Moment, endDate: Moment};

  public color: string = '#2889e9';
  public color1: string = '#e920e9';

	disabled = false;
	filter = false;

	format: any = DualListComponent.DEFAULT_FORMAT;

  constructor( private calendar: NgbCalendar) {
    this.Source = [{name:"one"},{name:"two"},{name:"tree"},{name:"four"}]
   }

	keepSorted = true;
	key!: any;
	display: any;
	source!: Array<any>;
	confirmed!: Array<any>;

	private sourceCourses!: Array<any>;

	private confirmedCourses!: Array<any>;

	arrayType = [
		{ name: 'Courses', detail: '(object array)', value: 'Courses' },
	];

	type = this.arrayType[0].value;

	private Courses: Array<any> = [
		{ key: 1, value:'javascript'},
		{ key: 2, value:'Java'},
		{ key: 3, value:'Python'},
		{ key: 4, value:'Typrscript'},
		{ key: 5, value:'PHP'},
		{ key: 6, value:'Ruby'},
		{ key: 7, value:'JQuery'},
		{ key: 8, value:'AngularJS'},
		{ key: 9, value:'ReactJS'},
		{ key: 10, value:'VueJS'}
	];


	private coursesLabel(item: any) {
		return item.value;
	}

	private useCourses() {
		this.key = 'key';
		this.display = this.coursesLabel;
		this.keepSorted = true;
		this.source = this.sourceCourses;
		this.confirmed = this.confirmedCourses;
	}

	swapSource() {
		switch (this.type) {
		case this.arrayType[0].value:
			this.useCourses();
			break;
		}
	}

	doReset() {
		this.sourceCourses = JSON.parse(JSON.stringify(this.Courses));
		this.confirmedCourses = new Array<any>();

		// Preconfirm some items.
		this.confirmedCourses.push( this.Courses[31] );

		switch (this.type) {
		case this.arrayType[0].value:
			this.useCourses();
			break;
		}
	}

  separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
	PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
	phoneForm = new FormGroup({
		phone: new FormControl(undefined, [Validators.required])
	});

	changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}


  ngOnInit(): void {

		this.doReset();

    this.dropdownList = [
      { "id": 1, "itemName": "January" },
      { "id": 2, "itemName": "February" },
      { "id": 3, "itemName": "March" },
      { "id": 4, "itemName": "April" },
      { "id": 5, "itemName": "May" },
      { "id": 6, "itemName": "June" },
      { "id": 7, "itemName": "July" },
      { "id": 8, "itemName": "August" },
      { "id": 9, "itemName": "September" },
      { "id": 10, "itemName": "October" },
      { "id": 11, "itemName": "November" },
      { "id": 12, "itemName": "December" },
    ];

    this.dropdownList2 = [
      { "id": 1, "itemName": "India" },
      { "id": 2, "itemName": "Singapore" },
      { "id": 3, "itemName": "Australia" },
      { "id": 4, "itemName": "Canada" },
      { "id": 5, "itemName": "South Korea" },
      { "id": 6, "itemName": "Germany" },
      { "id": 7, "itemName": "France" },
      { "id": 8, "itemName": "Russia" },
      { "id": 9, "itemName": "Italy" },
      { "id": 10, "itemName": "Sweden" }
    ];
    this.disableSettings = {
      text: "Disable",
      disabled: true,
    };
    this.SingleSettings = {
      singleSelection: true,
      text: "Select Single Month",
      classes: "myclass custom-class"
    };
    this.multipleSettings = {
      singleSelection: false,
      text: "Select Multiple Months",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass custom-class"
    };

    this.itemList = [
      { "id": 1, "itemName": "India", "category": "asia" },
      { "id": 2, "itemName": "Singapore", "category": "asia pacific" },
      { "id": 3, "itemName": "Germany", "category": "Europe" },
      { "id": 4, "itemName": "France", "category": "Europe" },
      { "id": 5, "itemName": "South Korea", "category": "asia" },
      { "id": 6, "itemName": "Sweden", "category": "Europe" },
    ];
     this.itemSettings = {
       singleSelection: false,
       text: 'Select Group',
       selectAllText: 'Select All',
       unSelectAllText: 'UnSelect All',
       searchPlaceholderText: 'Search Group',
       enableSearchFilter: true,
       badgeShowLimit: 5,
       groupBy: 'category',
     }
  }
  public config1: DropzoneConfigInterface = {
    clickable: true,
		maxFiles: 1,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

	public config2: DropzoneConfigInterface = {
    clickable: true,
		maxFiles: 5,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null
	};

	public config3: DropzoneConfigInterface = {
    clickable: true,
		maxFiles: 1,
		addRemoveLinks: true,
		autoReset: null,
		errorReset: null,
		cancelReset: null,

    acceptedFiles: '.png',
	};

  select = ['Firefox']

  selectValues = [
    { value: 1, label: 'Firefox' },
		{ value: 2, label: 'Chrome' },
		{ value: 3, label: 'Safari' },
		{ value: 4, label: 'Opera' },
		{ value: 5, label: 'Internet Explorer' },
	]


  select2Countries = [
    {
      id: 'group1',
      title: 'Mountain Time Zone',
      countryNames: [
        { id: "1", title: 'Arizona' },
        { id: "2", title: 'Colorado' },
        { id: "3", title: 'Idaho' },
        { id: "4", title: 'Montana' },
        { id: "5", title: 'Nebraska' },
        { id: "6", title: 'New Mexico' },
        { id: "7", title: 'North Dakota' },
        { id: "8", title: 'Utah' },
        { id: "9", title: 'Wyoming' },
      ]
    },
    {
      id: "group2",
      title: 'Central Time Zone',
      countryNames: [
        { id: "1", title: 'Alabama' },
        { id: "2", title: 'Arkansas' },
        { id: "3", title: 'Illinois' },
        { id: "4", title: 'Iowa' },
        { id: "5", title: 'Kansas' },
        { id: "6", title: 'Kentucky' },
        { id: "7", title: 'Louisiana' },
        { id: "8", title: 'Minnesota' },
        { id: "9", title: 'Mississippi' },
        { id: "10", title: 'Missouri' },
        { id: "11", title: 'Oklahoma' },
        { id: "12", title: 'South Dakota' },
        { id: "13", title: 'Texas' },
        { id: "14", title: 'Tennessee' },
        { id: "15", title: 'Wisconsin' },
      ]
    }
  ]

  files: File[] = [];

	onSelect(event) {
		this.files.push(...event.addedFiles);
    console.log(event.addedFiles[0]);

	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

}
