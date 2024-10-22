import { SectionProvider } from "@/lib/providers/SectionProvider";
import Section from "@/components/section";
import Title from "@/components/title";
import SideBar from "@/components/sidebar";
import Navigation from "@/components/navigation";
export default function Page() {
  return (
    <SectionProvider>
      <Title />
      <SideBar />
      <Navigation />
      <Section />
    </SectionProvider>
  );
}
