import { useState } from "react";

type User = {
  name: string;
  age: number;
  hobby: string;
};

export const useFetchUsers = () => {
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickFetchUsers = () => {
    setIsLoading(true);
    setIsError(false);
    fetch("http://localhost:5173/data.json")
      .then((response) => response.json())
      .then((json) => {
        const users: User[] = json.people.map((user: any) => ({
          name: user.name,
          age: user.age,
          hobby: user.hobby.join(","),
        }));
        setUserList(users);
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  return { userList, isLoading, isError, onClickFetchUsers };
};
