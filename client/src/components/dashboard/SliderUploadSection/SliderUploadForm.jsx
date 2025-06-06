import { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import { useUploadImageMutation } from "@/redux/features/allApis/uploadApi/uploadApi";
import { useAddHomeControlMutation } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import SpinLoader from "@/components/shared/loaders/Spinloader";
import toast from "react-hot-toast";

const SliderUploadForm = ({ closeModal }) => {
  const [uploadImage] = useUploadImageMutation();
  const [addHomeControl] = useAddHomeControlMutation();
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  const handleRemove = () => {
    setImagePreview(null);
    setImageFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);
      try {
        setLoading(true);
        const { data } = await uploadImage(formData);
        if (data.filePath) {
          const logoInfo = {
            page: "home",
            section: "banner",
            category: "slider",
            image: data?.filePath,
          };
          const result = await addHomeControl(logoInfo);
          if (result.data.insertedId) {
            toast.success("Slider uploaded successfully");
            setImagePreview(null);
            setImageFile(null);
            setLoading(false);
            closeModal();
          }
        }
      } catch (error) {
        setLoading(false);
        toast.error("Failed to upload logo");
      }
    } else {
      setLoading(false);
      toast.error("Failed to upload image");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          {!imagePreview ? (
            <label className="w-full h-full flex flex-col items-center text-center cursor-pointer relative">
              <div className="text-gray-400 text-4xl mb-4">📤</div>
              <p className="text-gray-500">Select a image to upload</p>
              <p className="text-gray-400 text-sm">or drag and drop it here</p>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </label>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full h-auto object-cover rounded-md mb-4"
              />
              <button
                type="button"
                onClick={handleRemove}
                className="text-red-500 text-sm hover:underline"
              >
                Remove Image
              </button>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Button
            disabled={loading || !imageFile}
            type="submit"
            className="bg-[#14805e] hover:bg-[#19614a] flex items-center gap-2 disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
            {loading ? (
              <SpinLoader />
            ) : (
              <>
                <IoAdd /> Upload
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SliderUploadForm;
