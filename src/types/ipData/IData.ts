export interface IData {
  ip: string;
  location: {
    city: string;
    country: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  isp: string;
}
