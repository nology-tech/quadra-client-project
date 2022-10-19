import { customRender } from "../../utils/testUtils";
import Layout from "./Layout";

it("Should render layout with children", () => {
  const { container } = customRender(
    <Layout>
      <p>some content</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});

it("Should render without navbar when showNavbar is false", () => {
  const { container } = customRender(
    <Layout showNavbar={false}>
      <p>some content</p>
    </Layout>
  );

  expect(container).toMatchSnapshot();
});
