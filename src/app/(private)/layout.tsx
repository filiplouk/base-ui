import Header from "@/features/Header/Header";
import Footer from "@/features/Footer/Footer";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <section>
        <Header />
        {children}
        <Footer />
      </section>
    </>
  );
};

export default PrivateLayout;
