import { Page } from "../Page/Page.tsx";
import type { PropsWithChildren } from "react";

export const PublicLayout = ({ children }: PropsWithChildren) => (
  <Page.Layout className="grid grid-rows-[48px_1fr_72px]">
    <Page.Header />
    <Page.Main>{children}</Page.Main>
    <Page.Footer />
  </Page.Layout>
);
