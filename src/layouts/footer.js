import React from "react";

const footer = () => (
  <div className="border-t-2 border-gray-400 flex flex-col md:flex-row md:justify-beetween text-center justify-between py-5 text-sm">
    <div className="mb-4">
      <a href="/" className="mx-2.5">
        Hakkında
      </a>
      <a href="/" className="mx-2.5">
        Gizlilik Sözleşmesi
      </a>
      <a href="/" className="mx-2.5">
        Hizmet Şartları
      </a>
    </div>
    <p>
      2024 - <span className="font-bold">Konzek</span> React Test Case, Tüm
      Hakları Saklıdır.
    </p>
  </div>
);

export default footer;
