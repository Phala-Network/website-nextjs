export interface PhalaNode {
  name: string
  host: string
  ip: string
  productName: string
  serverType: 'TDX' | 'GPU TEE'
  hardware: string
  cores?: number
  gpuCount?: number
  gpuType?: string
  ram: string
  location: {
    city: string
    country: string
    countryCode: string
    lat: number
    lon: number
  }
  operator: string
  remark?: string
  status: 'active' | 'maintenance' | 'offline'
}

export const phalaNodes: PhalaNode[] = [
  {
    name: 'gpu-in2',
    host: 'tdx-in2.phala.systems',
    ***REMOVED***
    productName: 'gpu-in2',
    serverType: 'GPU TEE',
    hardware: 'Intel Xeon Platinum 8580',
    cores: 240,
    gpuCount: 8,
    gpuType: 'H200',
    ram: '3113.9 TB',
    location: {
      city: 'New Delhi',
      country: 'India',
      countryCode: 'IN',
      lat: 28.5264,
      lon: 77.2888,
    },
    ***REMOVED***
    status: 'active',
  },
  {
    name: 'gpu-in1',
    host: 'tdx-in1.phala.systems',
    ***REMOVED***
    productName: 'gpu-in1',
    serverType: 'GPU TEE',
    hardware: 'Intel Xeon Platinum 8580',
    cores: 240,
    gpuCount: 8,
    gpuType: 'H200',
    ram: '3113.9 TB',
    location: {
      city: 'New Delhi',
      country: 'India',
      countryCode: 'IN',
      lat: 28.5264,
      lon: 77.2888,
    },
    ***REMOVED***
    status: 'active',
  },
  {
    name: 'gpu-08',
    host: 'tdx-gpu1.phala.systems',
    ***REMOVED***
    productName: 'gpu-08',
    serverType: 'GPU TEE',
    hardware: 'Intel Xeon Platinum 8558',
    cores: 192,
    gpuCount: 8,
    gpuType: 'H200',
    ram: '2147.5 GB',
    location: {
      city: 'Oakland',
      country: 'United States',
      countryCode: 'US',
      lat: 37.7428,
      lon: -122.1745,
    },
    ***REMOVED***
    remark: 'H200 Lenovo',
    status: 'active',
  },
  {
    name: 'prod5',
    host: 'tdx-prod5.phala.systems',
    ***REMOVED***
    productName: 'prod5',
    serverType: 'TDX',
    hardware: 'Intel Xeon 6710E',
    cores: 128,
    ram: '1953.1 GB',
    location: {
      city: 'Newark',
      country: 'United States',
      countryCode: 'US',
      lat: 37.5297,
      lon: -122.0402,
    },
    ***REMOVED***
    status: 'active',
  },
  {
    name: 'prod6',
    host: 'tdx-prod6.phala.systems',
    ***REMOVED***
    productName: 'prod6',
    serverType: 'TDX',
    hardware: 'Intel Xeon Gold 6554S',
    cores: 144,
    ram: '263.2 GB',
    location: {
      city: 'Bexley',
      country: 'United Kingdom',
      countryCode: 'GB',
      lat: 51.4409,
      lon: 0.0985,
    },
    ***REMOVED***
    status: 'active',
  },
  {
    name: 'prod7',
    host: 'tdx-prod7.phala.systems',
    ***REMOVED***
    productName: 'prod7',
    serverType: 'TDX',
    hardware: 'Intel Xeon 6710E',
    cores: 128,
    ram: '3113.9 GB',
    location: {
      city: 'Newark',
      country: 'United States',
      countryCode: 'US',
      lat: 37.5297,
      lon: -122.0402,
    },
    ***REMOVED***
    remark: 'Cabin 2',
    status: 'active',
  },
  {
    name: 'prod9',
    host: 'tdx-prod9.phala.systems',
    ***REMOVED***
    productName: 'prod9',
    serverType: 'TDX',
    hardware: 'Intel Xeon 6710E',
    cores: 128,
    ram: '3113.9 GB',
    location: {
      city: 'Newark',
      country: 'United States',
      countryCode: 'US',
      lat: 37.5297,
      lon: -122.0402,
    },
    ***REMOVED***
    remark: 'Cabin 2',
    status: 'active',
  },
  {
    name: 'prod10',
    host: 'tdx-lab-pub.phala.systems',
    ***REMOVED***
    productName: 'prod10',
    serverType: 'TDX',
    hardware: 'Intel Xeon Gold 5515+',
    cores: 32,
    ram: '131.1 GB',
    location: {
      city: 'Paris',
      country: 'France',
      countryCode: 'FR',
      lat: 48.8566,
      lon: 2.3522,
    },
    ***REMOVED***
    remark: 'Open for partner experiments',
    status: 'active',
  },
  {
    name: 'prod8',
    host: 'tdx-prod8.phala.systems',
    ***REMOVED***
    productName: 'prod8',
    serverType: 'TDX',
    hardware: 'Intel Xeon 6780E',
    cores: 288,
    ram: '1506.7 GB',
    location: {
      city: 'Newark',
      country: 'United States',
      countryCode: 'US',
      lat: 37.5297,
      lon: -122.0402,
    },
    ***REMOVED***
    remark: 'Cabin 2',
    status: 'active',
  },
  {
    name: 'prod2',
    host: 'tdx-prod2.phala.systems',
    ***REMOVED***
    productName: 'prod2',
    serverType: 'TDX',
    hardware: 'Intel Xeon Gold 5512U',
    cores: 56,
    ram: '791.7 GB',
    location: {
      city: 'Newark',
      country: 'United States',
      countryCode: 'US',
      lat: 37.5297,
      lon: -122.0402,
    },
    ***REMOVED***
    remark: 'Vana testnet, Spore',
    status: 'active',
  },
  {
    name: 'prod4',
    host: 'tdx-prod4.phala.systems',
    ***REMOVED***
    productName: 'prod4',
    serverType: 'TDX',
    hardware: 'Intel Xeon Gold 6530',
    cores: 128,
    ram: '976.6 GB',
    location: {
      city: 'Newark',
      country: 'United States',
      countryCode: 'US',
      lat: 37.5297,
      lon: -122.0402,
    },
    ***REMOVED***
    status: 'active',
  },
  {
    name: 'prod1',
    host: 'tdx-prod1.phala.network',
    ***REMOVED***
    productName: 'prod1',
    serverType: 'TDX',
    hardware: 'Intel Xeon Gold 6554S',
    cores: 144,
    ram: '251.0 GB',
    location: {
      city: 'Reston',
      country: 'United States',
      countryCode: 'US',
      lat: 38.958,
      lon: -77.3592,
    },
    ***REMOVED***
    remark: 'Vana mainnet',
    status: 'active',
  },
]
