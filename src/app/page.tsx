import Link from "next/link";

export default function Home() {
  return (
    <>
      <div> Some Machine Coding Question</div>
      <ul>
        <li>
          <Link href="/Question1"> Question1 </Link>
          <Link href="/Question3"> Question3 </Link>
          <Link href="/Question4"> Question4</Link>
          <Link href="/Question5"> Question5</Link>
        </li>
      </ul>
    </>
  );
}
