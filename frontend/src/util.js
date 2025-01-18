import { toast } from "react-toastify";

export const handleSuccess = (msj) => {
  toast.success(msj, {
    position: "top-right",
  });
};

export const handleError = (msg) => {
  toast.error(msg, {
    position: "top-right",
  });
};
