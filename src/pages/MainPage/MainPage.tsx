import { Page } from "../../components/layout";
import { CloudUpload } from "lucide-react";

export const MainPage = () => {
  return (
    <div className="grid place-items-center h-full">
      <Page.Container>
        <div className="flex flex-col gap-20 w-full">
          <Page.Title>Подписывай документы</Page.Title>
          <div className="flex gap-6">
            <div className="flex-1 p-6 bg-[#f7f7f7] rounded-3xl rounded-tr-sm flex flex-col gap-4 items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-xl grid place-items-center">
                1
              </div>
              <h2 className="">Выбери документ</h2>
            </div>
            <div className="flex-1 p-6 bg-[#f7f7f7] rounded-3xl rounded-bl-sm flex flex-col gap-4 items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-xl grid place-items-center">
                2
              </div>
              <h2 className="">Перетащи подпись</h2>
            </div>
            <div className="flex-1 p-6 bg-[#f7f7f7] rounded-3xl rounded-br-sm flex flex-col gap-4 items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-xl grid place-items-center">
                3
              </div>
              <h2 className="">Подпиши</h2>
            </div>
          </div>
          <div className="flex justify-center">
            <input type="file" className="hidden" id="document" />
            <label
              className="bg-[#ff4b01] inline-flex rounded-2xl cursor-pointer rounded-tl-md py-3 px-5 gap-2 text-white"
              htmlFor="document"
            >
              <CloudUpload />
              Выбрать документ
            </label>
          </div>
        </div>
      </Page.Container>
    </div>
  );
};
