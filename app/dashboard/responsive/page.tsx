import Image from "next/image";
import SectionMain from "../../_components/Section/Main";
import SectionTitle from "../../_components/Section/Title";
import { appTitle, getPageTitle } from "../../_lib/config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: getPageTitle("Responsive"),
};

const basePath = "/admin-one-react-tailwind";

export default function ResponsivePage() {
  return (
    <>
      <SectionTitle first>Mobile & Tablet</SectionTitle>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src={`${basePath}/1.png`}
            width={1920}
            height={960}
            alt={`Mobile & Tablet - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>

      <SectionTitle>Small laptop 1024px</SectionTitle>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src={`${basePath}/2.png`}
            width={1920}
            height={960}
            alt={`Small laptop 1024px - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src={`${basePath}/3.png`}
            width={1920}
            height={960}
            alt={`Small laptop 1024px (menu is open) - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>

      <SectionTitle>Laptop & desktop</SectionTitle>

      <SectionMain>
        <div className="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden">
          <Image
            src={`${basePath}/4.png`}
            width={1920}
            height={960}
            alt={`Laptop & desktop - ${appTitle}`}
            className="block"
          />
        </div>
      </SectionMain>
    </>
  );
}
