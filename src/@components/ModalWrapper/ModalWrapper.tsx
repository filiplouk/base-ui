"use client";

import useModal from "@/stores/general/modalStore";
import Dialog from "@mui/material/Dialog";

const ModalWrapper = ({ ...rest }) => {
  const { open, content } = useModal();

  return (
    <>
      <Dialog open={open}>{content}</Dialog>
    </>
  );
};

export default ModalWrapper;
