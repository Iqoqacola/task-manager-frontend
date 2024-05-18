import { useAuthContext } from "./useAuthContext";
import { useTaskContext } from "./useTaskContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: taskDispatch } = useTaskContext();

  const logout = () => {
    //remove user from localStorage
    localStorage.removeItem("user");

    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    taskDispatch({ type: "SET_TASK", payload: null });
  };

  return { logout };
};
