import React from 'react'

// ini adalah komponen frame dokumen
export default function DocumentFrame(props) {
  const { title, url, height, className: additional_classes } = props.data
  return <iframe
    title={title}
    src={url}
    frameBorder="0"
    width="100%"
    height={height || 720}
    style={{ margin: "auto" }}
    className={`rounded-xl bg-gray-200 ${additional_classes}`}></iframe>
}