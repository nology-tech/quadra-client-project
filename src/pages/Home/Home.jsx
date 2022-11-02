import Layout from "../../components/Layout/Layout";
import ModalWindow from "../../pages/ModalWindow/ModalWindow";

const Home = () => {
  return (
    <Layout>
      <ModalWindow title={"test"}/>
      <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p>
      <p>Ollie change to test auto deployment</p>
      <p>Showing PR request example</p>
    </Layout>
  );
};

export default Home;
