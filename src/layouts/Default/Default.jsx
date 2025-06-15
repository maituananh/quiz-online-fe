import FooterLayout from "@layouts/Default/Footer";
import HeaderLayout from "@layouts/Default/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <HeaderLayout />

      <div className="screen container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">{children}</div>
      </div>

      <FooterLayout />
    </>
  );
}

export default DefaultLayout;
