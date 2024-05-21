export interface RoseRocketLeg {
  id: string;
  sequence_id: number;
  version: number;
  external_id: string;
  public_id: string;
  order_id: string;
  manifest_id: string;
  origin_stop_id: string;
  destination_stop_id: string;
  origin: RoseRocketOrigin;
  destination: RoseRocketDestination;
  status: string;
  origin_start_at: string;
  origin_end_at: string;
  origin_appt_start_at: string;
  origin_appt_end_at: string;
  origin_notes: string;
  destination_start_at: string;
  destination_end_at: string;
  destination_appt_start_at: string;
  destination_appt_end_at: string;
  destination_notes: string;
  commodities: RoseRocketCommodity[];
  accessorials: string[];
  history: RoseRocketHistory;
}

export interface RoseRocketOrigin {
  terminal_id: string;
  org_name: string;
  contact_name: string;
  address_book_id: string;
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
  latitude: number;
  longitude: number;
}

export interface RoseRocketDestination {
  terminal_id: string;
  org_name: string;
  contact_name: string;
  address_book_id: string;
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
  latitude: number;
  longitude: number;
}

export interface RoseRocketCommodity {
  id: string;
  measurement_unit: string;
  weight_unit: string;
  freight_class: string;
  commodity_type: string;
  commodity_type_other: string;
  description: string;
  feet: number;
  volume: number;
  length: number;
  width: number;
  height: number;
  weight: number;
  nmfc: string;
  is_stackable: boolean;
  quantity: number;
  pieces: number;
  sku: string;
}

export interface RoseRocketHistory {
  origin_arrived_at: string;
  origin_in_at: string;
  origin_pickedup_at: string;
  origin_out_at: string;
  destination_arrived_at: string;
  destination_in_at: string;
  destination_delivered_at: string;
  destination_out_at: string;
}
