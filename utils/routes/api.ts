const constants = {
  root:
    process.env.NODE_ENV === 'development' || process.browser
      ? process.env.NEXT_PUBLIC_DEVELOPMENT_BASE_URL
      : process.env.NEXT_PUBLIC_BASE_URL,
  IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGES_DOMAIN,
  GET_UUID: 'domestic-flight-aggregator/v1/domesticflights/prepare',
  GET_DOMESTIC_TICKET: 'domestic-flight-aggregator/v1/domesticflights',
  GET_AIRPORTS: 'domestic-flight-aggregator/v1/airports',
  PASSENGERS: 'passenger/v1/passenger',
  ORDERS: 'shoppingorder/v1/orders',
  GET_COUNTRIES: 'routing/v1/countries',
  CREATE_PAYMENT_ORDER: 'payment/v1/product/order',
  GET_ORDER_STATUS: 'payment/v1/product/order',
  AUTH_REGISTER: 'authserver/register',
  AUTH_TOKEN: 'authserver/token',
  DOWNLOAD: 'ticket-pdf/v1/ticket',
};

export default constants;
