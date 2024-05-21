export interface RoseRocketManifestPaymentResponse {
    manifest_payment: RoseRocketManifestPayment
    payment_items: RoseRocketPaymentItem[]
    created_by: string
  }
  
  export interface RoseRocketManifestPayment {
    id: string
    created_at: string
    updated_at: string
    created_by: string
    manifest_id: string
    manifest_payment_status_id: string
    currency_id: string
    full_id: string
    revision: number
    send_to_email: string
    cc_to_email: string
    pay_to_company_name: string
    pay_to_contact_name: string
    pay_to_address_1: string
    pay_to_address_2: string
    pay_to_city: string
    pay_to_state: string
    pay_to_postal: string
    pay_to_country: string
    pay_to_timezone: string
    notes: string
    sub_total_amount: number
    total_amount: number
  }
  
  export interface RoseRocketPaymentItem {
    id: string
    created_at: string
    updated_at: string
    manifest_payment_id: string
    bill_class: string
    unit_price: number
    quantity: number
    total_amount: number
    description: string
  }
  