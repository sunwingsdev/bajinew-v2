import logo1 from "../../../assets/v2/gaming_license.png";
import logo2 from "../../../assets/v2/anjouan.png";
import logo3 from "../../../assets/v2/android-en.png";
import { Link } from "react-router";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const FooterLast = () => {
  const licenseData = [logo1, logo2];
  const { data: homeControls } = useGetHomeControlsQuery();
  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );
  return (
    <div className=" mx-2">
      <div className="grid grid-cols-2 mt-5 py-4  border-t border-white border-opacity-50">
        <div>
          <h2 className="text-green text-sm my-2"> গেইমিংয়ের লাইসেন্স </h2>
          <div className="flex flex-row items-center  gap-3">
            {licenseData.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt=""
                  className={`${index === 0 ? "w-20" : "w-7"}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-green text-sm my-2"> অ্যাপ ডাউনলোড </h2>
          <div className="flex items-center gap-2">
            <div>
              <img src={logo3} alt="" className="w-20" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row   gap-x-3 py-4 border-t border-white border-opacity-50">
        <img
          src={`${import.meta.env.VITE_BASE_API_URL}${logoHomeControl?.image}`}
          alt=""
          className="w-10"
        />
        <div className="text-white text-xs">
          <h2 className="text-green">উইন লাইক এ কিং</h2>
          <p className="opacity-50 text-[10px]">
            © 2025 {import.meta.env.VITE_SITE_NAME} কপিরাইট। সমস্ত অধিকার
            সংরক্ষিত
          </p>
        </div>
      </div>

      <div className="text-white text-opacity-50 text-xs   gap-x-3 py-4 border-t border-white border-opacity-50">
        <p>
          <Link className="text-green">
            {import.meta.env.VITE_SITE_NAME}.com
          </Link>
          BJ88 হোল্ডিংস লিমিটেডের মালিকানাধীন এবং এর আওতায় পরিচালিত।
          রেজিস্ট্রেশন নম্বর: ১৫৮৩৯, নিবন্ধিত ঠিকানা: হামছাকো, মুতসামুদু,
          আনজোয়ানের স্বায়ত্তশাসিত দ্বীপ, কমোরোস ইউনিয়ন। আমাদের সাথে যোগাযোগের
          ঠিকানা
        </p>

        <p>
          <Link className="text-green">bj88holdingslimited@gmail.com</Link> |{" "}
          <Link className="text-green">
            {import.meta.env.VITE_SITE_NAME}.com
          </Link>{" "}
          কমোরোস ইউনিয়নের আনজুয়ান স্বায়ত্তশাসিত দ্বীপ সরকার দ্বারা
          লাইসেন্সপ্রাপ্ত এবং নিয়ন্ত্রিত এবং লাইসেন্স নং ALSI-202410030-FI1 এর
          অধীনে কাজ করে।
        </p>

        <p>
          <Link className="text-green">
            {import.meta.env.VITE_SITE_NAME}.com
          </Link>{" "}
          সমস্ত আইনগত অনুমোদন ও শর্ত পূর্ণ করেছে এবং যেকোনো ধরণের গেম অফ চান্স
          এবং বেট পরিচালনার জন্য বৈধভাবে অনুমোদিত।
        </p>
      </div>
    </div>
  );
};

export default FooterLast;
