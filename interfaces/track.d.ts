export type trackType = {
  Name: string;
  Sponsor?: string[];
  PrizeWorth?: number;
  PrizeUnit: string;
  PrizeDetails?: string[];
  AboutUs?: string;
  Description?: string;
  Ideas?: string[];
  Requirements?: string;
  Links?: {
    Title: string;
    Link: string;
  }[];
  Judges: {
    Name: string;
    Twitter?: string;
  }[];
};
