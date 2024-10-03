import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className='notfound'>
      <div className='notfound__contianer'>
        <h1>Oops!</h1>
        <h2>404 - page not found</h2>
        <p>
          The page you are looking for might have been removed, had it&apos;s name changed or is
          temporarily unavailable.
        </p>
        <Link to='/'>Go to homepage</Link>
      </div>
    </section>
  );
}

export default PageNotFound;
