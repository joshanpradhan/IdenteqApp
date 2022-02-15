const BASE_API = 'https://shopsly-api.brilltech.com';

const APIEndPoints = {
  //AUTHENTICATION
  LOGIN: `${BASE_API}/login`,
  LOGOUT: `${BASE_API}/logout`,
  SIGNUP: `${BASE_API}/register/company`,
  FORGOT_PASSWORD: `${BASE_API}/request/password/reset?emailPhone=`,
  VERIFY_CODE: `${BASE_API}/check/verification/code`,
  RESET_PASSWORD: `${BASE_API}/password/reset`,
  CHANGE_PASSWORD: `${BASE_API}/password/change`,
  // IMAGE
  UPLOAD_IMAGE: `${BASE_API}/upload/image`,
  // PROFILE
  FETCH_PROFILE: `${BASE_API}/profile/`, // account id
  // WAREHOUSE
  FETCH_ALL_WAREHOUSE: `${BASE_API}/warehouse/company`,
  FETCH_ALL_WAREHOUSE_INVENTORY: `${BASE_API}/warehouse/inventory`,
  ADD_WAREHOUSE: `${BASE_API}/warehouse`,
  UPDATE_WAREHOUSE: `${BASE_API}/warehouse`,
  FETCH_WAREHOUSE: `${BASE_API}/warehouse/company?id=`, // company id
  // INVENTORY
  ADD_INVENTORY: `${BASE_API}/inventory`,
  ASSIGN_EMPLOYEE_INVENTORY: `${BASE_API}/assign/inventory`,
  FETCH_INVENTORY: `${BASE_API}/inventory/warehouse/`, // company id
  UPDATE_INVENTORY: `${BASE_API}/inventory`,
  DELETE_INVENTORY: `${BASE_API}/inventory`,
  // UNITS
  ADD_UNITS: `${BASE_API}/unit`,
  UPDATE_UNIT: `${BASE_API}/unit`,
  DELETE_UNIT: `${BASE_API}/unit`,
  FETCH_UNIT: `${BASE_API}/unit?id=&searchTerm=`,
  // CATEGORY
  ADD_CATEGORY: `${BASE_API}/category`,
  PATCH_CATEGORY: `${BASE_API}/category`,
  UPDATE_CATEGORY: `${BASE_API}/category`,
  DELETE_CATEGORY: `${BASE_API}/category`,
  FETCH_CATEGORY: `${BASE_API}/category/company`,
  FETCH_CATEGORY_BY_ID: `${BASE_API}/category/`,

  // SUB-CATEGORY
  SUB_CATEGORY: `${BASE_API}/subcategory`,
  FETCH_SUB_CATEGORY: `${BASE_API}/sub/category/`,
  // BRAND
  BRAND_API: `${BASE_API}/brand`,
  FETCH_BRAND: `${BASE_API}/brand/company?id=&searchTerm=`,
  FETCH_BRAND_BY_ID: `${BASE_API}/brand/`,
  // SUB-BRAND
  SUB_BRAND_API: `${BASE_API}/subbrand`,
  FETCH_SUB_BRAND: `${BASE_API}/subbrand/`,
  // EMPLOYEE
  EMPLOYEE_API: `${BASE_API}/employee`,
  FETCH_EMPLOYEE: `${BASE_API}/employee/company/`,
  // CUSTOMER
  FETCH_ALL_CUSTOMERS: `${BASE_API}/customer`,
  FETCH_CUSTOMER: `${BASE_API}/customer/company`,
  // MANUFACTURER
  MANUFACTURE_API: `${BASE_API}/manufacturer`,
  FETCH_MANUFACTURER_LIST: `${BASE_API}/manufacturer/company?id=&searchTerm=`,
 
  // SUPPLIERS
  SUPPLIER_API: `${BASE_API}/supplier`,
  FETCH_SUPPLIER_LIST: `${BASE_API}/supplier/company/`,
  
  // COMPANY
  COMPANY_API: `${BASE_API}/company`,
  

  // ITEM
  ITEM_API: `${BASE_API}/item`,
  ITEM_RECEIPT:`${BASE_API}/item/receipt`,
  ITEM_RECEIPT_DETAIL:`${BASE_API}/item/receipt/order`,
  FETCH_ITEM_LIST: `${BASE_API}/item/company`,
  FETCH_ITEM_BY_ID: `${BASE_API}/item`,
  FETCH_ITEM_BY_CATEGORY: `${BASE_API}/item/category`,
  
  // PAYMENT TERM
  PAYMENT_TERM_API: `${BASE_API}/payment/term`,
  FETCH_PAYMENT_TERM_LIST: `${BASE_API}/payment/term/company`,
  
  // PURCHASE ORDER
  FETCH_PURCHASE_ORDER_LIST: `${BASE_API}/purchase/order/company`,
  FETCH_PURCHASE_ORDER_LIST_BY_ID: `${BASE_API}/purchase/order/supplier`,
  PURCHASE_ORDER: `${BASE_API}/purchase/order`,
  
  // BILLS
  FETCH_BILLS_LIST: `${BASE_API}/bills/company`,
  FETCH_BILLS_LIST_BY_ID: `${BASE_API}/bills/`,
  BILLS_API: `${BASE_API}/bills`,
  
  // PAYMENT MADE
  FETCH_PAYMENT_MADE_LIST: `${BASE_API}/payment/made/company`,
  FETCH_PAYMENT_MADE_LIST_BY_ID: `${BASE_API}/payment/made/`,
  PAYMENT_MADE_API: `${BASE_API}/payment/made`,

  // SALES ORDER
  FETCH_SALES_ORDER_LIST: `${BASE_API}/sales/order/company`,
  FETCH_SALES_ORDER_LIST_BY_ID: `${BASE_API}/sales/order/`,
  FETCH_SALES_ORDER_LIST_BY_CUSTOMER_ID: `${BASE_API}/sales/order/customer/`,
  SALES_ORDER: `${BASE_API}/sales/order`,

  // INVOICE
  FETCH_INVOICE_LIST: `${BASE_API}/invoice/company`,
  FETCH_INVOICE_LIST_BY_ID: `${BASE_API}/invoice/`,
  INVOICE_API: `${BASE_API}/invoice`,
  FETCH_INVOICE_REPORT: `${BASE_API}/invoice/generate`,
  EXPORT_INVOICE_REPORT: `${BASE_API}/invoice/report`,

  // PAYMENT RECEIVE
  FETCH_PAYMENT_RECEIVE_LIST: `${BASE_API}/payment/received/company`,
  FETCH_PAYMENT_RECEIVE_LIST_BY_ID: `${BASE_API}/payment/received/`,
  PAYMENT_RECEIVE_API: `${BASE_API}/payment/received`,

  //BIN LOCATION
  BIN_LOCATION_API: `${BASE_API}/bin/location`,

  //CHECK IN
  CHECK_IN_API: `${BASE_API}/check/in`,

  //PICK ORDER
  SALES_ORDER_NO_BY_INVENTORY: `${BASE_API}/sales/order/inventory`,
  ORDER_LIST_BY_SKU_AND_BIN_LOCATION: `${BASE_API}/sales/order/nos`,

};

export default APIEndPoints;