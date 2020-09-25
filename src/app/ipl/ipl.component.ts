import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipl',
  templateUrl: './ipl.component.html',
  styleUrls: ['./ipl.component.css']
})
export class IplComponent implements OnInit {
  mi = true;
  csk = false;
  rcb = false;

  mumbaiCricket = [
    {
      sno: '1',
      matchCenter: 'Mumbai Indians (MI) Vs Chennai Super Kings (CSK)',
      date: '19 September 2020',
      day: 'Saturday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '2',
      matchCenter: 'Sun Risers Hyderabad (SRH) Vs Mumbai Indians (MI)',
      date: '21 September 2020',
      day: 'Monday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '3',
      matchCenter: 'Mumbai Indians (MI) Vs Royal Challengers Bangalore (RCB)',
      date: '25 September 2020',
      day: 'Friday',
      time: '4:00 PM',
      place: 'UAE'
    },
    {
      sno: '4',
      matchCenter: 'Kings XI Punjab (KXIP) Vs Mumbai Indians (MI)',
      date: '28 September 2020',
      day: 'Monday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '5',
      matchCenter: 'Kolkata Knight Riders (KKR) Vs Mumbai Indians (MI)',
      date: '3 October 2020',
      day: 'Saturday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '6',
      matchCenter: 'Mumbai Indians (MI) Vs Rajasthan Royals (RR)',
      date: '5 October 2020',
      day: 'Monday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '7',
      matchCenter: 'Mumbai Indians (MI) Vs Kings XI Punjab (KXIP)',
      date: '11 October 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '8',
      matchCenter: 'Chennai Super Kings (CSK) Vs Mumbai Indians (MI)',
      date: '14 October 2020',
      day: 'Wednesday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '9',
      matchCenter: 'Mumbai Indians (MI) Vs Kolkata Knight Riders (KKR)',
      date: '18 October 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '10',
      matchCenter: 'Mumbai Indians (MI) Vs Delhi Capitals (DC)',
      date: '21 October 2020',
      day: 'Wednesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '11',
      matchCenter: 'Delhi Capitals (DC) Vs Mumbai Indians (MI)',
      date: '26 October 2020',
      day: 'Monday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '12',
      matchCenter: 'Mumbai Indians (MI) Vs Sun Risers Hyderabad (SRH)',
      date: '29 October 2020',
      day: 'Thursday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '13',
      matchCenter: 'Rajasthan Royals (RR) Vs Mumbai Indians (MI)',
      date: '1 November 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '14',
      matchCenter: 'Royal Challengers Bangalore (RCB) Vs Mumbai Indians (MI)',
      date: '6 November 2020',
      day: 'Friday',
      time: '8:00 PM	',
      place: 'UAE',
    }
  ];


  cskCricket = [
    {
      sno: '1',
      matchCenter: 'Mumbai Indians (MI) Vs Chennai Super Kings (CSK)',
      date: '19 September 2020',
      day: 'Saturday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '2',
      matchCenter: 'Chennai Super Kings (CSK) Vs Rajasthan Royals (RR)',
      date: '22 September 2020',
      day: 'Tuesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '3',
      matchCenter: 'Kolkata Knight Riders (KKR) Vs Chennai Super Kings (CSK)',
      date: '27 September 2020',
      day: 'Sunday',
      time: '4:00 PM	',
      place: 'UAE'
    },
    {
      sno: '4',
      matchCenter: 'Chennai Super Kings (CSK) Vs Kings XI Punjab (KXIP)',
      date: '1 October 2020',
      day: 'Thursday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '5',
      matchCenter: 'Delhi Capitals (DC) Vs Chennai Super Kings (CSK)',
      date: '4 October 2020',
      day: 'Sunday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '6',
      matchCenter: 'Kings XI Punjab (KXIP) Vs Chennai Super Kings (CSK)',
      date: '7 October 2020',
      day: 'Wednesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '7',
      matchCenter: 'Chennai Super Kings (CSK) Vs Sun Risers Hyderabad (SRH)',
      date: '10 October 2020',
      day: 'Saturday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '8',
      matchCenter: 'Chennai Super Kings (CSK) Vs Mumbai Indians (MI)',
      date: '14 October 2020',
      day: 'Wednesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '9',
      matchCenter: 'Chennai Super Kings (CSK) Vs Royal Challengers Bangalore (RCB)',
      date: '18 October 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '10',
      matchCenter: 'Sun Risers Hyderabad (SRH) Vs Chennai Super Kings (CSK)',
      date: '20 October 2020',
      day: 'Tuesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '11',
      matchCenter: 'Rajasthan Royals (RR) Vs Chennai Super Kings (CSK)',
      date: '25 October 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '12',
      matchCenter: 'Chennai Super Kings (CSK) Vs Kolkata Knight Riders (KKR)',
      date: '27 October 2020',
      day: 'Tuesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '13',
      matchCenter: 'Chennai Super Kings (CSK) Vs Delhi Capitals (DC)',
      date: '30 October 2020',
      day: 'Friday',
      time: '4:00 PM',
      place: 'UAE',
    },
    {
      sno: '14',
      matchCenter: 'Royal Challengers Bangalore (RCB) Vs Chennai Super Kings (CSK)',
      date: '3 November 2020',
      day: 'Tuesday',
      time: '8:00 PM',
      place: 'UAE',
    }
  ];

  rcbbCricket = [
    {
      sno: '1',
      matchCenter: 'Royal Challengers Bangalore (RCB) Vs Kolkata Knight Riders (KKR)',
      date: '20 September 2020',
      day: 'Sunday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '2',
      matchCenter: 'Mumbai Indians (MI) Vs Royal Challengers Bangalore (RCB)',
      date: '25 September 2020',
      day: 'Friday',
      time: '4:00 PM',
      place: 'UAE'
    },
    {
      sno: '3',
      matchCenter: 'Kolkata Knight Riders (KKR) Vs Chennai Super Kings (CSK)',
      date: '27 September 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '4',
      matchCenter: 'Chennai Super Kings (CSK) Vs Kings XI Punjab (KXIP)',
      date: '1 October 2020',
      day: 'Thursday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '5',
      matchCenter: 'Delhi Capitals (DC) Vs Chennai Super Kings (CSK)',
      date: '4 October 2020',
      day: 'Sunday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '6',
      matchCenter: 'Kings XI Punjab (KXIP) Vs Chennai Super Kings (CSK)',
      date: '7 October 2020',
      day: 'Wednesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '7',
      matchCenter: 'Chennai Super Kings (CSK) Vs Sun Risers Hyderabad (SRH)',
      date: '10 October 2020',
      day: 'Saturday',
      time: '8:00 PM',
      place: 'UAE'
    },
    {
      sno: '8',
      matchCenter: 'Chennai Super Kings (CSK) Vs Mumbai Indians (MI)',
      date: '14 October 2020',
      day: 'Wednesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '9',
      matchCenter: 'Chennai Super Kings (CSK) Vs Royal Challengers Bangalore (RCB)',
      date: '18 October 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '10',
      matchCenter: 'Sun Risers Hyderabad (SRH) Vs Chennai Super Kings (CSK)',
      date: '20 October 2020',
      day: 'Tuesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '11',
      matchCenter: 'Rajasthan Royals (RR) Vs Chennai Super Kings (CSK)',
      date: '25 October 2020',
      day: 'Sunday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '12',
      matchCenter: 'Chennai Super Kings (CSK) Vs Kolkata Knight Riders (KKR)',
      date: '27 October 2020',
      day: 'Tuesday',
      time: '8:00 PM	',
      place: 'UAE'
    },
    {
      sno: '13',
      matchCenter: 'Chennai Super Kings (CSK) Vs Delhi Capitals (DC)',
      date: '30 October 2020',
      day: 'Friday',
      time: '4:00 PM',
      place: 'UAE',
    },
    {
      sno: '14',
      matchCenter: 'Royal Challengers Bangalore (RCB) Vs Chennai Super Kings (CSK)',
      date: '3 November 2020',
      day: 'Tuesday',
      time: '8:00 PM',
      place: 'UAE'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}
