import InputPage from "./components/inputCpfCnpj";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen gap-10">
        <h1 className="text-3xl font-bold">Validador de CPF e CNPJ</h1>
        <InputPage />
      </main>
    </>
  );
}
