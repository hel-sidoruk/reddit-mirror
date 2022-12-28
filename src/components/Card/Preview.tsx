import React from 'react';

export function Preview({ previewSrc }: { previewSrc: string }) {
  // previewSrc = previewSrc.endsWith('.jpg')
  return (
    <div className="preview">
      <img
        className="previewImg"
        src={
          previewSrc ||
          'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
        }
        alt="preview"
      />
    </div>
  );
}
