import { api } from "~/trpc/server";

export const POST = async (request: Request) => {
  const { repo, owner } = await request.json();
  console.log(repo, owner);
  await api.repo.createNewEntry({
    repo: repo,
    owner: owner,
  });
  return Response.json({ message: "success" });
};