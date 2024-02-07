export default function DocumentFrame(props: any) {
  const { title, url, height, className: additional_classes } = props.data
  return (
    <iframe
      title={title}
      src={url}
      frameBorder="0"
      width="100%"
      height={height || 720}
      style={{ margin: "auto" }}
      className={`rounded-xl bg-gray-200 ${additional_classes}`}
    ></iframe>
  )
}
