export interface ManifestEquipment {
  id: string;
  manifest_id: string;
  equipment_id: string;
  created_at: string;
  equipment: RoseRocketEquipment;
  equipment_type: RoseRocketEquipmentType;
  equipment_sub_type: RoseRocketEquipmentSubType;
  connector_mappings: RoseRocketConnectorMappings;
}

export interface RoseRocketEquipment {
  id: string;
  name: string;
  description: string;
  org_id: string;
  equipment_type_id: string;
  equipment_sub_type_id: string;
  external_id: string;
  manager_user_id: string;
  manager_full_name: string;
  length: number;
  width: number;
  height: number;
  max_weight: number;
  weight_unit_id: string;
  measurement_unit_id: string;
  equipment_status_id: string;
  is_assigned_to_manifest: boolean;
  is_manifest_in_transit: boolean;
  vin: string;
  bill_item_type_id: string;
  pay_type_id: string;
  pay_amount: number;
}

export interface RoseRocketEquipmentType {
  id: string;
  org_id: string;
  name: string;
  is_deleteable: boolean;
  is_active: boolean;
  icon: string;
  created_at: string;
  updated_at: string;
}

export interface RoseRocketEquipmentSubType {
  id: string;
  equipment_type_id: string;
  name: string;
  org_id: string;
  is_deleteable: boolean;
  created_at: string;
  updated_at: string;
}

export interface RoseRocketConnectorMappings {
  additionalProp: RoseRocketAdditionalProp;
}

export interface RoseRocketAdditionalProp {
  connector_id: string;
  vendor_equipment_id: string;
  equipment_id: string;
  org_id: string;
}
