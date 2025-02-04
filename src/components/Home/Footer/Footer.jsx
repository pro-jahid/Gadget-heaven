const Footer = () => {
  return (
    <div className="container mx-auto text-center mt-[100px]">
      <h2 className="text-center text-3xl font-bold mb-4">Gadget Heaven</h2>
      <p className="mb-7">Leading the way in cutting-edge technology and innovation.</p>
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 border-t-1">
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
