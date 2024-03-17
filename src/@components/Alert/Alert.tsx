"use client";

import { useState } from "react";
import classes from "./Alert.module.scss";

const Alert = ({ message, variation, ...rest }: Alert) => {
  const [open, setOpen] = useState(true);
  return <></>;
};

type Alert = {
  message: string;
  variation: "success" | "info" | "error" | "warning";
};
export default Alert;
