export interface PartnerRequest {
  company?: string
  firstName?: string
  email: string
  city?: string
  phone: string
  additional?: string
}

export interface OrderCall {
  firstName: string
  phone: string
}

export interface OrderPrice {
  company: string
  city: string
  email: string
}
