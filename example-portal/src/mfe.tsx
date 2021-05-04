import React from "react";
import { v4 as uuidv4 } from "uuid";
import { ParcelConfigObject, mountRootParcel } from "single-spa";

interface Props {
  name: string;
  customProps?: any;
}

export default function MFE({ name, customProps }: Props) {
  const id = uuidv4();
  React.useEffect(() => {
    System.import(name).then((parcelConfig) => {
      const domElement = document.getElementById(id);
      const parcelProps = { domElement, customProps };
      const parcel = mountRootParcel(
        parcelConfig as ParcelConfigObject,
        parcelProps
      );
    });
  }, []);

  return <div id={id} />;
}
