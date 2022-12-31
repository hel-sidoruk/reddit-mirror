export function isImage(url: string) {
  return url.endsWith('.jpg') ||
    url.endsWith('.png') ||
    url.endsWith('.gif') ||
    url.endsWith('.webp')
    ? true
    : false;
}
