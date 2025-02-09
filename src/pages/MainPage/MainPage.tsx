import { DocumentUpload } from "../../features/Document";

export const MainPage = () => {
  return (
    <div className="grid place-items-center h-full">
      <div className="flex items-center flex-col gap-12">
        <h1 className="text-5xl flex flex-col gap-2 items-center">
          Подписывай документы
        </h1>
        <DocumentUpload />
      </div>
    </div>
  );
};
