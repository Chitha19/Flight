import { Flight } from '../flight/flights';

export class mockFlightData {
  public static mfData: Flight[] = [
    {
      fullName: 'Chita ',
      from: 'Thailand',
      to: 'Japan',
      type: 'Return',
      adults: 1,
      departure: new Date('2565-05-15'),
      children: 2,
      infants: 3,
      arrival: new Date('2565-08-29'),
    },
  ];
}
