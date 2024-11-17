import Link from "next/link";
import { BEST_SELLER_API_URL } from "../constants";
import styles from "../../styles/home.module.css";

export const metadata = {
  title: "Home",
};

async function getListName() {
  const response = await fetch(BEST_SELLER_API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const lists = await getListName();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        THE NEW YORK TIMES BEST SELLER EXPLORER
      </h1>
      <div className={styles.grid}>
        {lists.results.map((list) => (
          <Link
            key={list.list_name_encoded}
            href={`/list/${list.list_name_encoded}`}
            className={styles.link}
          >
            {list.display_name} →
          </Link>
        ))}
      </div>
    </div>
  );
}
