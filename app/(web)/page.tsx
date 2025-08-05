"use client";

import Header from "../components/Header";
import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <MainLayout>
      <Header>
        <h1 className="text-base text-neutral-900 font-semibold leading-5 ml-4">
          Animal Finder
        </h1>
        <SearchBar />
      </Header>
    </MainLayout>
  );
}
