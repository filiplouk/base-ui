import Header from "@/@components/Header/Header";
import Footer from "@/@components/Footer/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
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

export default PublicLayout;
