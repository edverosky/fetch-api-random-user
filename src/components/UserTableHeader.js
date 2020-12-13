import RecNumSelectForm from './RecNumSelectForm';

function UserTableHeader(props) {

  return (
    <>
      <nav className="p-2 navbar-dark bg-dark">
        <div className="d-flex  mx-3 justify-content-between">
          <div><a href="/" className="navbar-brand">User Listing</a></div>
          <div>
            <RecNumSelectForm handleSelect={props.handleSelect} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default UserTableHeader;