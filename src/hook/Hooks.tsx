import { useQuery } from "@tanstack/react-query";
import { readOne } from "../api/taskApi";

export const getUserTask = (id: string) => {
  const { data } = useQuery({
    queryKey: ["getTask", { id: id }],
    queryFn: () => readOne(id),
    refetchInterval:1000
  });
  return { data };
};
