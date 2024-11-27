import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      {/* metadata */}
      <Head>
        <title>Ahtisham Ali Baig  | Portfolio</title>
        <meta
          name="description"
          content="Ahtisham Ali Baig is Civil BIM Engineer with 6+ years of experience."
        />
        <meta
          name="keywords"
          content="BIM Collab, Solibri , IFC models, clash detection, Bbender, AutoCAD, revit, SAP, ETABS, structural analysis, primavera p6, microsoft project, python, C++, ArcGIS, GIS, Rhino, dynamo"
        />
        <meta name="author" content="Sanidhya Kumar Verma" />
        <meta name="theme-color" content="#f13024" />
      </Head>

      <TopLeftImg />
      <Nav />
      <Header />

      {/* main content */}
      {children}
    </main>
  );
};

export default Layout;
