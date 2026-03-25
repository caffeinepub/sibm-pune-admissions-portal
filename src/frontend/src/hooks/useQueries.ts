import { useQuery } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useLookupApplication(applicationNumber: string) {
  const { actor, isFetching } = useActor();
  return useQuery<string | null>({
    queryKey: ["application", applicationNumber],
    queryFn: async () => {
      if (!actor) return null;
      const result = await actor.lookupApplication(applicationNumber);
      return result ?? null;
    },
    enabled: !!actor && !isFetching && !!applicationNumber,
  });
}
