export async function urlToFile(url) {
  const res = await fetch(url);
  const blob = await res.blob();

  const mime = blob.type;
  const ext = mime.slice(mime.lastIndexOf("/") + 1, mime.length);

  const file = new File([blob], `filename.${ext}`, { type: mime });

  return file;
}
