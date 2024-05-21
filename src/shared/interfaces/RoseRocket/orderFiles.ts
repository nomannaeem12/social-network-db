export interface RoseRocketOrderFiles {
  order_files: RoseRocketOrderFile[];
}

export interface RoseRocketOrderFile {
  id: string;
  order_id: string;
  org_id: string;
  uploaded_by_name: string;
  uploaded_by: string;
  uploaded_at: string;
  description: string;
  url: string;
  type: string;
  created_at: string;
  updated_at: string;
}
