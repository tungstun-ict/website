import Header from "../header/header.tsx";
import styles from "./page.module.scss";

type PageProps = {
  title: String;
  children?: React.ReactNode;
};

const Page = ({ title, children }: PageProps) => {
  return (
    <div className={styles.page}>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export default Page;
