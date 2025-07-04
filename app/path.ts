const appPath = {
  home() {
    return "/";
  },
  admin() {
    return "/admin";
  },
  signIn() {
    return "/auth/sign-in";
  },
  signUp() {
    return "/auth/signup";
  },
  cart() {
    return "/cart";
  },
  productDetail(slug: string) {
    return `/product//${slug}`;
  },
  showBookings() {
    return "/admin/bookings";
  },
  showBooking(id: string) {
    return `/admin/bookings/${id}`;
  },
  customers() {
    return "/admin/customers";
  },
  showCustomer(id: string) {
    return `/admin/customers/${id}`;
  },
};

export default appPath;
