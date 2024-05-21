export interface RoseRocketOrderByDateRange {
  orders: RoseRocketOrder[];
  offset: number;
  limit: number;
  total: number;
}

export interface RoseRocketOrder {
  created_at: string;
  updated_at: string;
  id: string;
  sequence_id: number;
  external_id: string;
  public_id: string;
  tender_id: any;
  customer: RoseRocketCustomer;
  origin: RoseRocketOrigin;
  destination: RoseRocketDestination;
  billing: RoseRocketBilling;
  status: string;
  billing_option: string;
  notes: string;
  po_num: string;
  tender_num: string;
  ref_num: string;
  custom_broker: string;
  port_of_entry: string;
  declared_value: number;
  declared_value_currency: string;
  pickup_start_at: string;
  pickup_start_at_local: string;
  pickup_end_at: string;
  pickup_end_at_local: string;
  pickup_appt_start_at: any;
  pickup_appt_start_at_local: any;
  pickup_appt_end_at: any;
  pickup_appt_end_at_local: any;
  pickup_notes: any;
  delivery_start_at: string;
  delivery_start_at_local: string;
  delivery_end_at: string;
  delivery_end_at_local: string;
  delivery_appt_start_at: any;
  delivery_appt_start_at_local: any;
  delivery_appt_end_at: any;
  delivery_appt_end_at_local: any;
  delivery_notes: any;
  current_leg_id: string;
  pickedup_at: string;
  pickedup_at_local: string;
  delivered_at: string;
  delivered_at_local: string;
  dim_type: string;
  default_measurement_unit_id: string;
  default_weight_unit_id: string;
  commodities: RoseRocketCommodity[];
  accessorials: any[];
  type: string;
  is_multistop_order: boolean;
  multistop_order_id: any;
  multistop_order_full_id: any;
  multistop_order_sequence_id: any;
  billable_miles: any;
  stops: RoseRocketStop[];
  auto_post_load_board_connector_ids: string[];
  source: string;
  transportation_authority_id: any;
}

export interface RoseRocketCustomer {
  id: string;
  external_id: string;
  short_code: string;
}

export interface RoseRocketOrigin {
  address_book_id: any;
  address_book_external_id: any;
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
  latitude: number;
  longitude: number;
  bus_hours_start_at: any;
  bus_hours_end_at: any;
  timezone: string;
}

export interface RoseRocketDestination {
  address_book_id: any;
  address_book_external_id: any;
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
  latitude: number;
  longitude: number;
  bus_hours_start_at: any;
  bus_hours_end_at: any;
  timezone: string;
}

export interface RoseRocketBilling {
  address_book_id: any;
  address_book_external_id: any;
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
  latitude: number;
  longitude: number;
  bus_hours_start_at: any;
  bus_hours_end_at: any;
  timezone: string;
}

export interface RoseRocketCommodity {
  id: string;
  measurement_unit: string;
  weight_unit: string;
  freight_class: string;
  commodity_type: string;
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
  pieces: any;
  commodity_type_other: string;
  sku: string;
}

export interface RoseRocketStop {
  created_at: string;
  updated_at: string;
  id: string;
  sequence_id: number;
  external_id: string;
  public_id: string;
  tender_id: any;
  multistop_order_id: string;
  multistop_order_full_id: string;
  customer: RoseRocketCustomer;
  origin: RoseRocketOrigin;
  destination: RoseRocketDestination;
  billing: RoseRocketBilling;
  status: string;
  billing_option: string;
  notes: string;
  po_num: string;
  tender_num: string;
  ref_num: string;
  custom_broker: string;
  port_of_entry: string;
  declared_value: number;
  declared_value_currency: string;
  pickup_start_at: string;
  pickup_start_at_local: string;
  pickup_end_at: string;
  pickup_end_at_local: string;
  pickup_appt_start_at: any;
  pickup_appt_start_at_local: any;
  pickup_appt_end_at: any;
  pickup_appt_end_at_local: any;
  pickup_notes: string;
  delivery_start_at: string;
  delivery_start_at_local: string;
  delivery_end_at: string;
  delivery_end_at_local: string;
  delivery_appt_start_at: any;
  delivery_appt_start_at_local: any;
  delivery_appt_end_at: any;
  delivery_appt_end_at_local: any;
  delivery_notes: any;
  pickedup_at: string;
  pickedup_at_local: string;
  delivered_at: string;
  delivered_at_local: string;
  dim_type: string;
  default_measurement_unit_id: string;
  default_weight_unit_id: string;
  commodities: RoseRocketCommodity[];
  accessorials: any[];
  transportation_authority_id: any;
}
