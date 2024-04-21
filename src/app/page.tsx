import Link from "next/link";

export default function Home() {
  return (
    <>
      <div> Some Machine Coding Question</div>
      <ul>
        <li>
          <Link href="/Question1"> Question1 </Link>
        </li>
      </ul>
    </>
  );
}
