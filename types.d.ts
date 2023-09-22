type DataItem = {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
};

type DataSource = 'mock' | 'api' | 'csv';
