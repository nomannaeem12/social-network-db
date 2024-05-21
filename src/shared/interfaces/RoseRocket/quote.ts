export interface RoseRocketQuotes {
  quotes: RoseRocketQuote[];
}

export interface RoseRocketQuote {
  id: string;
  order_id: string;
  currency: string;
  customer_service_id: string;
  is_expired: boolean;
  pickup_start_at: any;
  pickup_end_at: any;
  est_delivery_start_at: any;
  est_delivery_end_at: any;
  notes: string;
  error_message: string;
  type: string;
  charges: RoseRocketCharges;
  status: string;
}

export interface RoseRocketCharges {
  freight_cost: number;
  fuel_cost: number;
  accessorials: number;
  total: number;
}
