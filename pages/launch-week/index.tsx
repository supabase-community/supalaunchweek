import Page from '@components/page';

export default function index() {
  const meta = {
    title: 'title',
    description: 'description'
  };

  return (
    <>
      <Page meta={meta}>
        <h1>hello world</h1>
      </Page>
    </>
  );
}
