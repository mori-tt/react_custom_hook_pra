import { useFetchUsers } from "./useFetchUsers";

function App() {
  const { userList, isLoading, isError, onClickFetchUsers } = useFetchUsers();
  return (
    <div>
      <button onClick={onClickFetchUsers}>ユーザー取得</button>
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        userList.map((user) => (
          <p key={user.name}>
            {user.name}({user.age}){user.hobby}
          </p>
        ))
      )}
    </div>
  );
}

export default App;
