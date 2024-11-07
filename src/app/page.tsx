import { SectionProvider } from "@/lib/providers/SectionProvider";
import Section from "@/components/section";
import Frame from "@/components/frame";

export default function Page() {
  return (
    <SectionProvider>
      <Frame />
      <Section />
    </SectionProvider>
  );
}
