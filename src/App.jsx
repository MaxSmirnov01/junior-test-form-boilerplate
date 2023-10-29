import { Form, ImageList } from './components';

function App() {
  return (
    <>
      <header>
        <h1>Тестовое задание</h1>
      </header>
      <main>
        <section>
          <Form />
          <hr style={{ border: '1px solid #ccc' }}></hr>
          <ImageList />
        </section>
      </main>
    </>
  );
}

export default App;
