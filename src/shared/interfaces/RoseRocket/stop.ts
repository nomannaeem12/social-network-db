export interface RoseRocketStops {
  stops: RoseRocketStop[];
}

export interface RoseRocketStop {
  id: string;
  created_at: string;
  updated_at: string;
  manifest_id: string;
  ordinal: number;
  latitude: number;
  longitude: number;
  next_distance?: number;
  type: string;
  schedule_start_at: any;
  schedule_end_at: any;
  org_name: string;
  contact_name: string;
  address_1: string;
  address_2: string;
  suite: string;
  city: string;
  state: string;
  country: string;
  postal: string;
  phone: string;
  phone_ext: string;
  email: string;
  fax: string;
  stop_notes: string;
  tasks: RoseRocketTask[];
}

export interface RoseRocketTask {
  id: string;
  created_at: string;
  updated_at: string;
  stop_id: string;
  leg_id: string;
  type: string;
  status: string;
  description: string;
  org_id: string;
  master_trip_id: string;
  customer_id: string;
  assigned_to: any;
  assigned_at: any;
  completed_at?: string;
  problem_at: any;
  cancelled_at: any;
  arrived_at?: string;
  in_at: any;
  out_at: any;
}
