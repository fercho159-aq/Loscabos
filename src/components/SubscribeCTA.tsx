"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import SubscribeModal, { type SubscribeSource } from "./SubscribeModal";

type Props = {
  source: SubscribeSource;
  label: ReactNode;
  title: string;
  description?: string;
  className?: string;
  style?: CSSProperties;
  dataAnim?: string;
  onOpen?: () => void;
};

export default function SubscribeCTA({
  source,
  label,
  title,
  description,
  className,
  style,
  dataAnim,
  onOpen,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className}
        style={style}
        data-anim={dataAnim}
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
      >
        {label}
      </button>
      <SubscribeModal
        open={open}
        onClose={() => setOpen(false)}
        source={source}
        title={title}
        description={description}
      />
    </>
  );
}
