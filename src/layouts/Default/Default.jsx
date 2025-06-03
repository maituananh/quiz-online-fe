import FooterLayout from "@layouts/Default/Footer";
import HeaderLayout from "@layouts/Default/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <HeaderLayout />

      {children}

      <FooterLayout />
    </>
  );
}

export default DefaultLayout;
