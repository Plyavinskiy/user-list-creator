import Card from "../UI/Card";

const AddUser = () => {
  const AddUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form onSubmit={AddUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
