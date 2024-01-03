import React from "react";
import "./App.css";

type LimitedElementType = Extract<
  React.ElementType,
  "button" | "a" | "span" | React.JSXElementConstructor<unknown>
>;

type ButtonProps<T extends LimitedElementType = "button"> =
  T extends LimitedElementType
    ? { as?: T } & React.ComponentPropsWithoutRef<T>
    : never;

function Button<T extends LimitedElementType = "button">({
  as = "button",
  ...props
}: ButtonProps<T>) {
  const Component = as;
  return <Component {...props} />;
}

function ValidDivComponent({ name }: { name: string }) {
  return <div>{name}</div>;
}

function App() {
  return (
    <>
      <Button as="button">actual button</Button>
      <Button>default button</Button>
      <Button as="a" href="/">
        anchor tag
      </Button>
      <Button as={ValidDivComponent} name="Hello" />
    </>
  );
}
export default App;
