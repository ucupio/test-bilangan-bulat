import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";

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
    jumlahAnggota: 0,
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
    }
  }, [himpBil, hasil, setHimpBil, setHasil]);

  const setSumOddEven = useCallback(() => {
    let tempOdd: number = 0;
    let tempEven: number = 0;
    himpBil.forEach((bil) => {
      if (bil % 2 === 0) {
        tempEven += bil;
      } else {
        tempOdd += bil;
      }
    });
    if (!hasil.sumOdd) {
      setHasil({ ...hasil, sumEven: tempEven, sumOdd: tempOdd });
    }
  }, [hasil, himpBil]);

  const setArrayOdd = useCallback(() => {
    let tempOdd: number[] = [];
    himpBil.forEach((bil) => {
      if (bil % 2 !== 0) {
        tempOdd.push(bil);
      }
    });
    if (!hasil.sumOdd) {
      setHasil({ ...hasil, arrayOdd: tempOdd });
    }
  }, [hasil, himpBil]);

  const setArrayEven = useCallback(() => {
    let tempEven: number[] = [];
    himpBil.forEach((bil) => {
      if (bil % 2 === 0) {
        tempEven.push(bil);
      }
    });
    if (!hasil.sumOdd) {
      setHasil({ ...hasil, arrayEven: tempEven });
    }
  }, [hasil, himpBil]);

  const setCountMember = useCallback(() => {
    let tempCount: number = 0;
    himpBil.forEach((bil) => tempCount++);
    if (!hasil.jumlahAnggota) {
      setHasil({ ...hasil, jumlahAnggota: tempCount });
    }
  }, [hasil, himpBil]);

  const setMin = useCallback(() => {
    let tempMin: number = himpBil[0];
    himpBil.forEach((bil) => {
      if (bil <= tempMin) tempMin = bil;
    });
    if (!hasil.min) {
      setHasil({ ...hasil, min: tempMin });
    }
  }, [hasil, himpBil]);

  const setMax = useCallback(() => {
    let tempMax: number = himpBil[0];
    himpBil.forEach((bil) => {
      if (bil >= tempMax) tempMax = bil;
    });
    if (!hasil.max) {
      setHasil({ ...hasil, max: tempMax });
    }
  }, [hasil, himpBil]);

  const setModus = useCallback(() => {
    let temp: number[] = [];
    let objTemp: Record<number, number> = {};
    himpBil.forEach((bil) => {
      if (objTemp[bil] === undefined) {
        objTemp[bil] = 0;
      }
      objTemp[bil]++;
    });
    for (const bil in objTemp) {
      if (objTemp[bil] > 1) {
        temp.push(objTemp[bil]);
      }
    }
    if (!hasil.modus) {
      setHasil({ ...hasil, modus: temp[0] });
    }
  }, [hasil, himpBil]);

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

        <div className={styles.content}>
          <h1>Algoritma Himpunan Bilanagan Bulat</h1>
        </div>
        <div className={styles.content}>
          <h3>Himpunan Bilanagan Bulat</h3>
          {himpBil.map((bil) => (
            <span key={bil}>{`${bil} ,`} </span>
          ))}
        </div>
        <div className={styles.content}>
          Jumlah anggota himpunan:{" "}
          <button onClick={setCountMember}>Tampilkan</button>{" "}
          {hasil.jumlahAnggota}
          <br />
          Anggota terkecil:<button onClick={setMin}>Tampilkan</button>{" "}
          {hasil.min}
          <br />
          Anggota terbesar:<button onClick={setMax}>Tampilkan</button>{" "}
          {hasil.max}
          <br />
          Anggota angka yang sama / yang sering muncul :
          <button onClick={setModus}>Tampilkan</button> {hasil.modus}
          <br />
          index angka yang sama berdasar Urutan dari kecil ke besar:{" "}
          {hasil.indexModus}
          <br />
          Jumlah bilangan ganjil:
          <button onClick={setSumOddEven}>Tampilkan</button> {hasil.sumOdd}
          <br />
          Jumlah bilangan genap:{" "}
          <button onClick={setSumOddEven}>Tampilkan</button> {hasil.sumEven}
          <br />
          himpunan bilanangan ganjil:{" "}
          <button onClick={setArrayOdd}>Tampilkan</button> {hasil.arrayOdd}
          <br />
          himpunan bilanangan genap:{" "}
          <button onClick={setArrayEven}>Tampilkan</button> {hasil.arrayEven}
          <br />
        </div>
      </main>
    </>
  );
}
