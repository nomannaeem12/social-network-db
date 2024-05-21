export interface RoseRocketLegFiles {
  leg_files: LegFile[];
}

export interface LegFile {
  id: string;
  created_at: string;
  updated_at: string;
  org_id: string;
  leg_id: string;
  uploaded_by: string;
  uploaded_at: string;
  type: string;
  url: string;
  description: string;
  latitude: number;
  longitude: number;
  metadata: any;
  task_id: string;
  eta_start_at: string;
  eta_end_at: string;
}
