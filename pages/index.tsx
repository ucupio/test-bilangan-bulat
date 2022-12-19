import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface HasilState {
  jumlahAnggota: number;
  min: number;
  max: number;
  modus: number;
  indexModus: number;
  sumOdd: number;
  sumEven: number;
  arrayOdd: number[];
  arrayEven: number[];
}

export default function Home() {
  const [himpBil, setHimpBil] = useState<number[]>([83, 1]);
  const [hasil, setHasil] = useState<HasilState>({
    jumlahAnggota: himpBil.length,
    min: 0,
    max: 0,
    modus: 0,
    indexModus: 0,
    sumOdd: 0,
    sumEven: 0,
    arrayEven: [],
    arrayOdd: [],
  });

  useEffect(() => {
    const a: number = 83;
    const b: number = 1;
    const index: number = himpBil.length / 2;
    const valueA = index * 5;
    const valueB = index * 25;
    const resultA = a - valueA;
    const resultB = b + valueB;
    if (resultA >= 8) {
      setHimpBil([...himpBil, resultA, resultB]);
    } else {
      setHasil({
        jumlahAnggota: himpBil.length,
        min: 0,
        max: 0,
        modus: 0,
        indexModus: 0,
        sumOdd: 0,
        sumEven: 0,
        arrayEven: [],
        arrayOdd: [],
      });
    }
  }, [himpBil, setHimpBil, setHasil]);
  return (
    <>
      <Head>
        <title>Algoritma Himpunan Bilangan Bulat</title>
        <meta name="test" content="test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Algoritma ada di&nbsp;
            <code className={styles.code}>readme.md</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By UCUPIO
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <pre>{JSON.stringify(himpBil, null, 2)}</pre>
        </div>
        <div className={styles.center}>
          <pre>{JSON.stringify(hasil, null, 2)}</pre>
        </div>
      </main>
    </>
  );
}
