"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
});

interface CurrencyProps {
  value?: string | number;
}

export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // price direkt gelmiyor bu sekilde sonra ekleniyor
  if (!isMounted) {
    return null;
  }

  return <div className="font-semibold">{formatter.format(Number(value))}</div>;
};
