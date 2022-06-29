import { useRouter } from "next/router";

export default function CarDetail() {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Hello {pid}</h1>
    </div>
  );
}
