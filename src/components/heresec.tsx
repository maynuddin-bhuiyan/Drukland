import Login from "./login";

export default function HereSec() {
  return (
    <div className="py-10 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 gap-4 lg:h-[640px]">
          <div className="lg:col-span-2">
            <div className="bg-[#FFFfff] h-full rounded-lg">
              <div className="flex justify-center items-center h-full">
              <h3 className="text-3xl regular-text w-[230px]">Image or Video of our services</h3>
              </div>
            </div>
          </div>
          <div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}