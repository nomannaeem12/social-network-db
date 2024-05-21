export interface RoseRocketTag {
  order_tags: RoseRocketOrderTag[];
  offset: number;
  limit: number;
}

export interface RoseRocketOrderTag {
  id: string;
  org_id: string;
  name: string;
  icon: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
