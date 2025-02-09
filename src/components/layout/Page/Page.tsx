import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";
import { createElement } from "react";

const Container = ({ children }: PropsWithChildren) => {
  return <div className="mx-auto max-w-screen-lg w-full">{children}</div>;
};

const Header = () => {
  return (
    <header className="border-b border-[#f4f4f6] h-12 flex items-center">
      <Container>
        <div className="flex items-center gap-3">
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "12px",
              borderTopLeftRadius: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
              backgroundColor: "#ff4b01",
            }}
          >
            <svg
              width={28}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                d="M623.2 192c-51.8 3.5-125.7 54.7-163.1 71.5-29.1 13.1-54.2 24.4-76.1 24.4-22.6 0-26-16.2-21.3-51.9 1.1-8 11.7-79.2-42.7-76.1-25.1 1.5-64.3 24.8-169.5 126L192 182.2c30.4-75.9-53.2-151.5-129.7-102.8L7.4 116.3C0 121-2.2 130.9 2.5 138.4l17.2 27c4.7 7.5 14.6 9.7 22.1 4.9l58-38.9c18.4-11.7 40.7 7.2 32.7 27.1L34.3 404.1C27.5 421 37 448 64 448c8.3 0 16.5-3.2 22.6-9.4 42.2-42.2 154.7-150.7 211.2-195.8-2.2 28.5-2.1 58.9 20.6 83.8 15.3 16.8 37.3 25.3 65.5 25.3 35.6 0 68-14.6 102.3-30 33-14.8 99-62.6 138.4-65.8 8.5-.7 15.2-7.3 15.2-15.8v-32.1c.2-9.1-7.5-16.8-16.6-16.2z"
                fill="#fff"
              />
            </svg>
          </div>
          <span className="text-sm font-normal uppercase">esignify</span>
        </div>
      </Container>
    </header>
  );
};

const Footer = () => {
  return (
    <Container>
      <footer className="bg-[#f4f4f6] rounded-2xl text-sm p-4 hidden">
        Разработка
      </footer>
    </Container>
  );
};

const Layout = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return createElement("div", {
    children,
    className: twMerge("h-screen", className),
  });
};

const Main = ({ children }: PropsWithChildren) => {
  return <main className="py-24">{children}</main>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="text-5xl text-center">{children}</h1>;
};

export const Page = {
  Container,
  Header,
  Footer,
  Layout,
  Main,
  Title,
};
