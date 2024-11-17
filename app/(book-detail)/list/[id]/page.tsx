import { BOOK_API_URL } from "../../../constants";
import styles from "../../../../styles/bookList.module.css";

type IParams = Promise<{ id: string }>;

export async function generateMetadata(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  const books = await getBooks(id);
  return {
    title: books.results.list_name,
  };
}

async function getBooks(id: string) {
  const response = await fetch(`${BOOK_API_URL}?name=${id}`);
  const json = await response.json();
  return json;
}

export default async function Detail(props: { params: IParams }) {
  const params = await props.params;
  const id = params.id;
  const books = await getBooks(id);

  // 데이터 확인
  if (!books?.results?.books) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{books.results.display_name}</h1>
      <div className={styles.grid}>
        {books.results.books.map((book) => (
          <div key={book.primary_isbn13} className={styles.card}>
            <img
              src={book.book_image}
              alt={book.title}
              className={styles.image}
            />
            <h3 className={styles.bookTitle}>{book.title}</h3>
            <p className={styles.author}>{book.author}</p>
            <a
              href={book.amazon_product_url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.buyButton}
            >
              buy now →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
