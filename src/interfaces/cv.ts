export interface CV {
  title: string;
  entries: Entry[];
}

export interface Entry {
  company: string;
  location: string;
  job: string;
  year: string;
  items: string[];
}
